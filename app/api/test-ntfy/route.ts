import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://ntfy.sh/sehatghar-bookings-sawar", {
      method: "POST",
      headers: {
        "Title": "Test - SehatGhar",
        "Priority": "high",
        "Tags": "white_check_mark",
      },
      body: "Test notification from Vercel server!",
    });
    return NextResponse.json({ ok: res.ok, status: res.status });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
