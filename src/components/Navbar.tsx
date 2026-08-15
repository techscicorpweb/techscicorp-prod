import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#0B2545] text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">

        <Image
          src="/tsc-logo-only-transparent.png"
          alt="TSC Logo"
          width={120}
          height={80}
          className="h-10 w-auto"
        />

        <div className="flex gap-6">
          <Link href="/.">Home
          </Link>
          <Link href="./capabilities">Capabilities
          </Link>
          <Link href="./about">About TSC
          </Link>
          <Link href="./contracts">Contracts
          </Link>
          <Link href="./careers">Careers
          </Link>
          <Link href="./contact">Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}