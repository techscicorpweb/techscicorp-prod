import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Technology Science Corporation",
  description:
    "Technology Science Corporation provides advanced engineering, scientific research, systems integration, and mission support solutions.",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl font-bold mb-6">
            Technology Science Corporation
          </h1>
          <p className="text-xl max-w-3xl text-slate-300">
            Delivering innovative scientific, engineering, and technical
            solutions that support critical missions and advance technology.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/capabilities"
              className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-medium px-8 py-3 rounded-lg transition"
            >
              Our Capabilities
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white text-white hover:bg-white hover:text-slate-900 font-medium px-8 py-3 rounded-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Image Banner Section (light blue, responsive background image via next/image) */}
      <section className="relative py-24 overflow-hidden bg-slate-100">
        {/* Responsive background image */}
        <Image
          src="/home-banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light-blue tint overlay, matches bg-slate-100 (#f1f5f9) */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(241, 245, 249, 0.85)" }}
        />

        {/* Content sits above the image + overlay */}
        <div className="relative container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Mission-Focused. Technically Driven.
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            From Program Management and Unified Communications to Enterprise Network Operations, TSC provides high-quality, creative IT service solutions and proven past performance to meet limited budgets and tight deadlines.
          </p>
          <Link
            href="/capabilities"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-3 rounded-lg transition"
          >
            Explore Our Capabilities
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Exceptional Commitment to Support Your Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Learn how TSC’s customer service, responsiveness, and performance solve your most complex technical challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-3 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* DOW SkillBridge */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 max-w-3xl flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Partner of Department of War Internship Program
          </h2>
          <Image
            src="/dowskillbridge-logo.png"
            alt="DoW SkillBridge"
            width={400}
            height={130}
            className="w-64 h-auto mb-6"
          />
          <p className="text-lg text-slate-700">
            Technology Science Corporation proudly partners with the{" "}
            <Link
              href="https://www.skillbridge.mil/programoverview"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-900 transition"
            >
              DoW SkillBridge program
            </Link>
            , providing transitioning service members hands-on training and
            career opportunities in engineering, IT, and program management
            as they move into civilian careers.
          </p>
        </div>
      </section>
    </main>
  );
}
