import Link from "next/link";
export const metadata = {
  title: "Capabilities | Technology Science Corporation",
  description:
    "Technology Science Corporation provides advanced engineering, scientific research, systems integration, and mission support solutions.",
};
const capabilities = [
  {
    title: "Program Management",
    description: [
      "Project Management & Records Information Management Supply",
      "Implementation & Support",
      "CTP Reg compliance",
	  "Past Projects",
	  "Defense Health Agency",
	  "Customs & Border Protection",
	  "Navy, Veterans Affairs", 
	  "Food & Drug Administration",
    ],
  },
  {
    title: "Unified Communications, Audio Visual (AV) & Video Teleconference (VTC)",
    description: [
	  "AV Design and Installation",
      "VTC Services and Project Management", 
      "AMX/Crestron Programming and Integration", 
      "Maintenance and End User training",
	  "Past Projects",
	  "DISA", 
	  "Special Operations Command (Pentagon)", 
	  "Department of Justice", 
	  "National Institute of Health", 
	  "Fairfax County, VA", 
	  "Maryland Casinos",
    ],
  },
  {
    title: "Enterprise Services",
    description: [
      "Enterprise Network Operations",
      "Network Security",
      "Data Center Operations",
      "Change Management",
      "Continuous Monitoring",
      "Network and Cyber Security",
      "Intrusion analysis",
      "Security Accreditation & Infrastructure Management",
      "Vulnerability Management",
      "Past Projects",
      "DISA",
      "Veterans Affairs",
      "Baltimore Data Center",
    ],
  },
  {
    title: "Global Product Warranty and Maintenance",
    description: [
      "Break/Fix Services - hardware system repairs, installations and upgrades across networking platforms",
      "Help Desk: 24/7/365 CONUS/OCONUS; Centralized Trouble-Shooting Dispatch",
      "Incident Management & Escalation Tracking",
      "Maintains a 99% SLA attainment across all contracts and continuous improvement",
    ],
  },
  {
    title: "Managed Print Services",
    description: [
      "Manage consumable acquisition",
      "Identify potential constraints for better capacity and availability",
      "Managing spend throughout the product lifecycle",
      "Multivendor CAC Deployment and integration",
      "Asset Management & HW Maintenance",
      "​Printer utilization and Reporting",
    ],
  },
];
export default function CapabilitiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl font-bold mb-6">Our Capabilities</h1>
          <p className="text-xl max-w-3xl text-slate-300">
            Delivering innovative scientific, engineering, and technical
            solutions that support critical missions and advance technology.
          </p>
        </div>
      </section>
      {/* Capability Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="border rounded-lg p-8 shadow-sm hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  {capability.title}
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {capability.description.map((line, index) => {
                      if (line.startsWith("Past Projects")) {
                        const rest = line.replace("Past Projects", "");
                        return (
                        <li key={index} className="mt-4 list-none">
                          <span className="underline">Past Projects</span>
                          {rest}
                        </li>
                       );
                    }
                    return <li key={index}>{line}</li>;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Support Your Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Learn how Technology Science Corporation can help solve your most
            complex technical challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-3 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}