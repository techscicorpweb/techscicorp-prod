import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0B2545] text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex gap-6">
        
		<Link href="/.">Home
		</Link>
		<Link href="./capabilities">Capabilities
		</Link>
		<Link href="./about">About TSC
		</Link>
		<Link href="./careers">Careers
		</Link>
		<Link href="./contact">Contact Us
		</Link>
      </div>		
	</nav>
  );
}