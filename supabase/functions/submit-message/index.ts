import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23487784/uonymvd/";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\+\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.length >= 10;
};

const sendEmailNotification = async (data: ContactMessage) => {
  try {
    const emailResponse = await resend.emails.send({
      from: "Lucas Charlot Portfolio <onboarding@resend.dev>",
      to: ["lucascharalotte@gmail.com"],
      subject: "New Contact Message from Lucas Charlot Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            New Contact Message from Portfolio
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007acc; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #007acc;">${data.email}</a></p>
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007acc; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${data.message}</p>
          </div>
          
          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}<br>
              <strong>Source:</strong> Lucas Charlot Portfolio Website
            </p>
          </div>
        </div>
      `,
    });
    
    console.log("Email sent successfully:", emailResponse);
    return emailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const triggerZapierWebhook = async (data: ContactMessage) => {
  try {
    const webhookPayload = {
      ...data,
      timestamp: new Date().toISOString(),
      source: "Lucas Charlot Portfolio Contact Form"
    };

    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookPayload),
    });

    if (!response.ok) {
      console.error(`Zapier webhook failed with status: ${response.status}`);
    } else {
      console.log("Zapier webhook triggered successfully");
    }
  } catch (error) {
    console.error("Error triggering Zapier webhook:", error);
    // Don't throw - we want the main process to continue even if webhook fails
  }
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Submit message function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { 
        status: 405, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      }
    );
  }

  try {
    const messageData: ContactMessage = await req.json();
    console.log("Message data received:", messageData);

    // Validation
    const errors: string[] = [];

    if (!messageData.name || messageData.name.trim().length === 0) {
      errors.push("Name is required");
    }

    if (!messageData.email || messageData.email.trim().length === 0) {
      errors.push("Email is required");
    } else if (!validateEmail(messageData.email)) {
      errors.push("Email must be in valid format");
    }

    if (!messageData.message || messageData.message.trim().length === 0) {
      errors.push("Message is required");
    }

    if (messageData.phone && !validatePhone(messageData.phone)) {
      errors.push("Phone number must be valid if provided");
    }

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ error: "Validation failed", details: errors }),
        { 
          status: 400, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    // Store in Supabase
    const { data: insertedData, error: dbError } = await supabase
      .from('messages')
      .insert([{
        name: messageData.name.trim(),
        email: messageData.email.trim(),
        phone: messageData.phone?.trim() || null,
        message: messageData.message.trim()
      }])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save message");
    }

    console.log("Message saved to database:", insertedData);

    // Send email notification (don't wait for it)
    sendEmailNotification(messageData).catch(error => {
      console.error("Email notification failed:", error);
    });

    // Trigger Zapier webhook (don't wait for it)
    triggerZapierWebhook(messageData).catch(error => {
      console.error("Zapier webhook failed:", error);
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message received and processed successfully."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in submit-message function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error",
        message: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);