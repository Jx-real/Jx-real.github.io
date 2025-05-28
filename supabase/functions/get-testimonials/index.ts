import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const DISCORD_CHANNEL_ID = Deno.env.get("DISCORD_CHANNEL_ID") || "";
const DISCORD_BOT_TOKEN = Deno.env.get("DISCORD_BOT_TOKEN") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const response = await fetch(
      `https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/messages?limit=100`,
      {
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.statusText}`);
    }

    const messages = await response.json();
    
    // Filter and transform messages
    const testimonials = messages
      .filter((msg: any) => !msg.author.bot && msg.content.trim().length > 0)
      .map((msg: any) => ({
        content: msg.content,
        author: msg.author.username,
        avatar: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`,
        timestamp: msg.timestamp
      }))
      .slice(0, 10); // Limit to 10 testimonials

    return new Response(JSON.stringify(testimonials), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }
});