import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Technology Science Corporation
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Delivering innovative scientific, engineering, and technical
              solutions to support critical government and defense missions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>

            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/capabilities"
                  className="text-slate-300 hover:text-white transition"
                >
                  Capabilities
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="text-slate-300 hover:text-white transition"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            <div className="space-y-1 text-slate-300">
              <p>Technology Science Corporation</p>
              <p>Reston, VA</p>

              <p>
                <a
                  href="mailto:info@techscicorp.com"
                  className="hover:text-white transition"
                >
                  info@techscicorp.com
                </a>
              </p>

              <p>
                <a
                  href="tel:+1800-224-3137"
                  className="hover:text-white transition"
                >
                  (800) 224-3137
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400">
          © {currentYear} Technology Science Corporation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}