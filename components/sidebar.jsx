import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="sticky bg-ming w-[11.3%] min-h-screen top-0 text-white">
      <Image
        alt="logo"
        className="top-0 right-0"
        height={230}
        src="/images/white.png"
        width={250}
      />
    </aside>
  );
}
