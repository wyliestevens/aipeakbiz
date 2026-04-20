import { NextRequest, NextResponse } from "next/server";

// TODO: Wire this up to Resend, SendGrid, or a GHL webhook.
// For now, this logs the assessment results and returns success.
// To connect Resend: npm install resend, then use the Resend SDK here.
// To connect GHL: POST the data to your GHL webhook URL.

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Log assessment results for now
    console.log("Assessment submission:", JSON.stringify(data, null, 2));

    // TODO: Send email to wylie@aipeakbiz.com with results
    // TODO: Send email to the user with their PDF results

    return NextResponse.json({ success: true, message: "Assessment results received." });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process assessment." },
      { status: 500 }
    );
  }
}
