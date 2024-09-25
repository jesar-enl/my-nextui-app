import { Metadata } from "next";

import { title } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Resources",
};

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>
    </div>
  );
}
