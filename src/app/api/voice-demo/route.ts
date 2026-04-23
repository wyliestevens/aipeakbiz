import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK_URL =
  process.env.GHL_VOICE_DEMO_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/8G7oorGsCPDIlU76HPkb/webhook-trigger/6252625f-b313-4075-9328-c614941ea780";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone || !/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: "Valid 10-digit phone number required" },
        { status: 400 }
      );
    }

    const formattedPhone = `+1${phone}`;

    // Send to GHL webhook with voice-bot-demo tag
    fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: formattedPhone,
        tags: ["voice-bot-demo"],
        source: "website-voice-demo",
        customField: {
          demo_type: "ai_voice_bot",
          requested_at: new Date().toISOString(),
        },
      }),
    }).catch(() => {
      // Fire-and-forget, don't block response
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
