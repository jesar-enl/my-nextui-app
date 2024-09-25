import { Metadata } from "next";

import { title } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Ministries",
};

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
    </div>
  );
}
