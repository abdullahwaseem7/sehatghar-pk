import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Home Nurse in Lahore | Qualified Nurses & Attendants | SehatGhar.pk",
  description:
    "Browse verified home nurses and patient attendants in Lahore. Male and female caregivers available. PNC-registered, background-checked. Book online or call 0305-8489988.",
  alternates: { canonical: "https://sehatghar-pk.vercel.app/nurses" },
};

export default function NursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
