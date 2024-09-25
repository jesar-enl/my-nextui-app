import { Metadata } from "next";

import { title } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Membership",
};

export default function MembershipPage() {
  return (
    <div>
      <h1 className={title()}>Membership page</h1>
    </div>
  );
}
