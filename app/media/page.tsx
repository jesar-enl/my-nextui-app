import { Metadata } from "next";

import { title } from "@/components/primitives";
export const metadata: Metadata = {
  title: "Media",
};

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
    </div>
  );
}
