import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/8G7oorGsCPDIlU76HPkb/webhook-trigger/6252625f-b313-4075-9328-c614941ea780";

function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

function getTopPainPoint(data: Record<string, unknown>): string {
  const items = [
    { label: "missed_calls", value: Number(data.missedCallsLost) || 0 },
    { label: "no_shows", value: Number(data.noShowsLost) || 0 },
    { label: "weak_reviews", value: Number(data.reviewsLost) || 0 },
    { label: "website", value: Number(data.websiteLost) || 0 },
  ];
  items.sort((a, b) => b.value - a.value);
  return items[0].label;
}

function buildEmailHtml(data: Record<string, unknown>): string {
  const missedCalls = Number(data.missedCallsLost) || 0;
  const noShows = Number(data.noShowsLost) || 0;
  const reviews = Number(data.reviewsLost) || 0;
  const website = Number(data.websiteLost) || 0;
  const totalMonthly = Number(data.totalMonthlyLoss) || 0;
  const totalAnnual = Number(data.totalAnnualLoss) || 0;
  const paybackWeeks = Number(data.paybackWeeks) || 0;
  const firstName = data.firstName || "there";

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1C1C1E; color: #F1F5F9; padding: 40px 30px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://www.aipeakbiz.com/images/logo.png" alt="AI Peak Biz" width="80" style="margin-bottom: 16px;" />
        <h1 style="font-size: 24px; margin: 0; color: #F1F5F9;">${firstName}, here are your results</h1>
        <p style="color: #A1A1AA; font-size: 14px; margin-top: 8px;">AI Peak Biz Revenue Loss Assessment</p>
      </div>

      <div style="background: #2A2A2E; border-radius: 8px; padding: 24px; margin-bottom: 20px; text-align: center;">
        <p style="color: #A1A1AA; font-size: 14px; margin: 0 0 8px 0;">Estimated Monthly Revenue Loss</p>
        <p style="font-size: 36px; font-weight: bold; margin: 0; color: #3B82F6;">${formatCurrency(totalMonthly)}</p>
        <p style="color: #A1A1AA; font-size: 14px; margin-top: 8px;">That&rsquo;s ${formatCurrency(totalAnnual)} per year</p>
      </div>

      <div style="background: #2A2A2E; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="font-size: 16px; margin: 0 0 16px 0; color: #F1F5F9;">Breakdown</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #A1A1AA; font-size: 14px;">Missed Calls</td>
            <td style="padding: 8px 0; text-align: right; font-weight: bold; color: #F1F5F9; font-size: 14px;">${formatCurrency(missedCalls)}/mo</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A1A1AA; font-size: 14px;">No-Shows</td>
            <td style="padding: 8px 0; text-align: right; font-weight: bold; color: #F1F5F9; font-size: 14px;">${formatCurrency(noShows)}/mo</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A1A1AA; font-size: 14px;">Weak Reviews</td>
            <td style="padding: 8px 0; text-align: right; font-weight: bold; color: #F1F5F9; font-size: 14px;">${formatCurrency(reviews)}/mo</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A1A1AA; font-size: 14px;">Website Underperformance</td>
            <td style="padding: 8px 0; text-align: right; font-weight: bold; color: #F1F5F9; font-size: 14px;">${formatCurrency(website)}/mo</td>
          </tr>
        </table>
      </div>

      <div style="background: #2A2A2E; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="font-size: 16px; margin: 0 0 8px 0; color: #F1F5F9;">Your Details</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr><td style="padding: 4px 0; color: #A1A1AA;">Industry</td><td style="padding: 4px 0; text-align: right; color: #F1F5F9;">${data.industry || "N/A"}</td></tr>
          <tr><td style="padding: 4px 0; color: #A1A1AA;">Monthly Calls</td><td style="padding: 4px 0; text-align: right; color: #F1F5F9;">${data.monthlyCalls || "N/A"}</td></tr>
          <tr><td style="padding: 4px 0; color: #A1A1AA;">Missed Call Rate</td><td style="padding: 4px 0; text-align: right; color: #F1F5F9;">${Math.round((Number(data.missedCallRate) || 0) * 100)}%</td></tr>
          <tr><td style="padding: 4px 0; color: #A1A1AA;">Revenue per Customer</td><td style="padding: 4px 0; text-align: right; color: #F1F5F9;">${formatCurrency(Number(data.revenuePerCustomer) || 0)}</td></tr>
          <tr><td style="padding: 4px 0; color: #A1A1AA;">Google Reviews</td><td style="padding: 4px 0; text-align: right; color: #F1F5F9;">${data.reviewCount || 0} (${Number(data.starRating || 0).toFixed(1)} stars)</td></tr>
          <tr><td style="padding: 4px 0; color: #A1A1AA;">Monthly Website Visitors</td><td style="padding: 4px 0; text-align: right; color: #F1F5F9;">${data.monthlyVisitors || "N/A"}</td></tr>
          <tr><td style="padding: 4px 0; color: #A1A1AA;">No-Show Rate</td><td style="padding: 4px 0; text-align: right; color: #F1F5F9;">${Math.round((Number(data.noShowRate) || 0) * 100)}%</td></tr>
        </table>
      </div>

      <div style="background: #2A2A2E; border-radius: 8px; padding: 20px; margin-bottom: 24px; text-align: center;">
        <p style="color: #A1A1AA; font-size: 14px; margin: 0 0 4px 0;">Growth System: $7,997 build + $1,497/mo</p>
        <p style="font-size: 18px; font-weight: bold; margin: 0; color: #3B82F6;">Typical payback: ${paybackWeeks > 0 ? `${paybackWeeks} weeks` : "immediate"}</p>
      </div>

      <div style="text-align: center;">
        <a href="https://link.aipeakbiz.com/widget/bookings/ai-peak-biz-demo" style="display: inline-block; background: #3B82F6; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">Book a Demo</a>
        <p style="color: #71717A; font-size: 12px; margin-top: 16px;">AI Peak Biz &middot; Kingman, Arizona &middot; 928-628-6080</p>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const userEmail = data.email;
    const html = buildEmailHtml(data);

    // Determine the biggest pain point for custom GHL workflows
    const topPainPoint = getTopPainPoint(data);

    // Send to GHL webhook with all data for nurture campaigns
    const ghlPayload = {
      // Contact info
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      phone: data.phone || "",
      smsConsent: data.smsConsent || false,
      source: "assessment_tool",

      // Industry
      industry: data.industry || "",

      // Assessment inputs
      reviewCount: data.reviewCount || 0,
      starRating: data.starRating || 0,
      monthlyCalls: data.monthlyCalls || 0,
      missedCallRate: Math.round((Number(data.missedCallRate) || 0) * 100),
      revenuePerCustomer: data.revenuePerCustomer || 0,
      monthlyVisitors: data.monthlyVisitors || 0,
      conversionRate: ((Number(data.conversionRate) || 0) * 100).toFixed(1),
      noShowRate: Math.round((Number(data.noShowRate) || 0) * 100),

      // Calculated losses (monthly)
      missedCallsLost: Math.round(Number(data.missedCallsLost) || 0),
      noShowsLost: Math.round(Number(data.noShowsLost) || 0),
      reviewsLost: Math.round(Number(data.reviewsLost) || 0),
      websiteLost: Math.round(Number(data.websiteLost) || 0),
      totalMonthlyLoss: Math.round(Number(data.totalMonthlyLoss) || 0),
      totalAnnualLoss: Math.round(Number(data.totalAnnualLoss) || 0),
      paybackWeeks: data.paybackWeeks || 0,

      // Custom segmentation fields for targeted nurture
      topPainPoint,
      lossLevel: Number(data.totalMonthlyLoss) >= 5000 ? "high" : Number(data.totalMonthlyLoss) >= 2000 ? "medium" : "low",
      hasWeakReviews: (Number(data.starRating) || 5) < 4.5,
      highMissedCalls: (Number(data.missedCallRate) || 0) > 0.25,
      highNoShows: (Number(data.noShowRate) || 0) > 0.15,
    };

    // Fire GHL webhook (don't await — fire and forget so user isn't delayed)
    fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ghlPayload),
    }).catch((err) => console.error("GHL webhook error:", err));

    // Send email to Wylie
    await resend.emails.send({
      from: "AI Peak Biz <wylie@aipeakbiz.com>",
      to: "wylie@aipeakbiz.com",
      subject: `New Assessment Lead: ${data.firstName || "Unknown"} ${data.lastName || ""} - ${data.industry || "Unknown"} - ${formatCurrency(Number(data.totalMonthlyLoss) || 0)}/mo`,
      html,
    });

    // Send to the user
    if (userEmail) {
      await resend.emails.send({
        from: "AI Peak Biz <wylie@aipeakbiz.com>",
        to: userEmail,
        subject: `${data.firstName || "Hey"}, your AI Peak Biz Revenue Loss Assessment Results`,
        html,
      });
    }

    return NextResponse.json({ success: true, message: "Assessment results sent." });
  } catch (error) {
    console.error("Assessment email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send assessment results." },
      { status: 500 }
    );
  }
}
