import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK_URL =
  process.env.GHL_VOICE_DEMO_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/8G7oorGsCPDIlU76HPkb/webhook-trigger/b6c36035-51b7-4f92-b3ba-b9e01fcbe4c9";

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

    const ghlRes = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: "Demo",
        last_name: "Caller",
        email: "demo@aipeakbiz.com",
        phone: formattedPhone,
        business_name: "Voice Demo Request",
        consent: true,
        source: "website-voice-demo-section",
      }),
    });

    if (!ghlRes.ok) {
      const body = await ghlRes.text().catch(() => "");
      console.error("GHL voice-demo webhook failed", ghlRes.status, body);
      return NextResponse.json(
        { error: "Could not start the demo call. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("voice-demo route error", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
