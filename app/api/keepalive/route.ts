import { NextResponse } from "next/server";

export async function GET() {
  // Ping Supabase to prevent free tier from pausing
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  await fetch(`${supabaseUrl}/rest/v1/bookings?limit=1`, {
    headers: {
      "apikey": supabaseKey,
      "Authorization": `Bearer ${supabaseKey}`,
    },
  }).catch(() => {});

  // Ping ntfy to keep subscription alive
  await fetch("https://ntfy.sh/sehatghar-bookings-sawar", {
    method: "POST",
    headers: {
      "Title": "Sehat Connect - System Online",
      "Priority": "min",
      "Tags": "white_check_mark",
    },
    body: "Keepalive ping - Supabase and ntfy are active.",
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}
