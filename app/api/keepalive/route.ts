import { NextResponse } from "next/server";

export async function GET() {
  await fetch("https://ntfy.sh/sehatghar-bookings-sawar", {
    method: "POST",
    headers: {
      "Title": "SehatGhar - System Online",
      "Priority": "min",
      "Tags": "white_check_mark",
    },
    body: "Weekly keepalive - notifications are working.",
  });

  return NextResponse.json({ ok: true });
}
