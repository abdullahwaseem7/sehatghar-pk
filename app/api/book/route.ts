import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, area, ref } = await req.json();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  const res = await fetch(`${supabaseUrl}/rest/v1/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseKey,
      "Authorization": `Bearer ${supabaseKey}`,
      "Prefer": "return=minimal",
    },
    body: JSON.stringify({ name, phone, area, ref, status: "pending" }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Supabase error:", res.status, error);
    return NextResponse.json({ error, status: res.status }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
