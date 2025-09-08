import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-[#0b0f19]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f19]/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-white">
          <span className="text-lg font-bold tracking-tight">ProductApp</span>
        </Link>
      </div>
    </header>
  );
}
