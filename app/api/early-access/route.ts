import { NextRequest, NextResponse } from "next/server";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

function isValidPhone(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export async function POST(req: NextRequest) {
  let body: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    consent?: boolean;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = (body.firstName || "").trim();
  const lastName = (body.lastName || "").trim();
  const phone = (body.phone || "").trim();
  const consent = body.consent === true;

  if (!firstName || !lastName || !phone) {
    return NextResponse.json({ error: "First name, last name, and phone are required." }, { status: 400 });
  }
  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Consent to receive messages is required." }, { status: 400 });
  }

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    console.error("Missing GHL_API_KEY or GHL_LOCATION_ID environment variables.");
    return NextResponse.json({ error: "Server is not configured correctly. Please try again later." }, { status: 500 });
  }

  const normalizedPhone = phone.startsWith("+") ? phone : `+1${phone.replace(/[^\d]/g, "")}`;

  try {
    const ghlRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        phone: normalizedPhone,
        source: "Sterling website - Get Early Access form",
        tags: ["early-access-lead", "sms-consent-yes"],
      }),
    });

    if (!ghlRes.ok) {
      const errText = await ghlRes.text();
      console.error("GHL API error:", ghlRes.status, errText);
      return NextResponse.json({ error: "Something went wrong submitting your info. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("GHL API request failed:", err);
    return NextResponse.json({ error: "Something went wrong submitting your info. Please try again." }, { status: 502 });
  }
}
