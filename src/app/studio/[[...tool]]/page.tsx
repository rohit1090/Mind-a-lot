import type { Metadata } from "next";

import StudioClient from "./StudioClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Studio",
};

export default function StudioPage() {
  return <StudioClient />;
}
