import Image from "next/image";

const contracts = [
  {
    title: "GSA MAS: GS-35F-445GA",
    linkText: "View/Download Schedule",
    linkHref: "https://www.gsaelibrary.gsa.gov/ElibMain/contractorInfo.do?contractNumber=GS-35F-445GA&contractorName=TECHNOLOGY+SCIENCE+CORP&executeQuery=YES",
    period: "Contract Period: June 2, 2017 – June 1, 2027",
    details: [
      "SIN 54151S - Information Technology Professional Services",
      "Class D301 (DC01) IT AND TELECOM - Facility Operation Maintenance – Facility Management",
      "Class D302 (DA01) IT AND TELECOM - Systems Development",
      "Class D306 (DD01) IT AND TELECOM - Systems Analysis",
      "Class D307 (DA01) IT AND TELECOM - IT Strategy and Architecture",
      "Class D308 (DA01) IT AND TELECOM - Programming",
      "Class D310 (DJ01) IT AND TELECOM - Backup and Security Services",
      "Class D316 (DG01) IT AND TELECOM - Telecommunications Network Management",
      "Class D399 (DA01) IT AND TELECOM - Other and Telecommunications – Other IT Services",
      "SIN 132 100 - Ancillary Supplies and/or Services (Subject to Cooperative Purchasing)",
      "Class 7010 (7B22) ADPE System Configuration – Ancillary Supplies and/or Services",
      "Class D399 (DA01) IT AND TELECOM - Other IT and Telecommunications – Ancillary Supplies and Services",
      "SIN 541990AV - Professional Audio/Video Services",
    ],
    logo: "/gsa-mas-logo.png",
    logoCaption: "GSA MAS Contract Holder GS-35F-445GA",
  },
  {
    title: "GSA OASIS+ Multiple Awards: TSC-SPTRMJV, LLC",
    linkHref: null,
    period: "Contract Period: December 2024 – 5-Year Base with one 5-Year Option",
    details: [
      "Awards: Total SB: 47QRCA25DSF73, SDVOSB: 47QRCA25DV098, WOSB: 47QRCA25DW137, 8(a): 47QRCA25DA390",
      "DUNS Number: 125656895",
      "UEI: YAL1ZEQ9C6N7",
      "CAGE Code: 7YAL6",
      "POC: Thu Stubbs — thu.stubbs@tsc-sptrm-jv.com",
    ],
    logo: "/oasis-plus-logo.jpg",
    logoCaption: "Awarded to Joint Venture TSC-SPTRM-JV LLC Multiple Awards",
  },
  {
    title: "GSA 8(a) STARS III 47QTCB22D0521: TSC-ITG JV, LLC",
    linkHref: null,
    period: "Contract Period: July 2, 2021 – July 1, 2026 with (1) 3-year option",
    details: [
      "DUNS Number: 117595346",
      "UEI: FUJTMURMUZZ8",
      "CAGE Code: 8NWU1",
      "POC: Thu Stubbs — tstubbs@tsc-itg.com",
    ],
    logo: "/8a-stars-3-logo.jpg",
    logoCaption: "Awarded to Joint Venture TSC-ITG JV 47QTCB22D0521",
  },
];

export default function ContractsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-5xl font-bold mb-6">Our Contracts</h1>
          <p className="text-xl max-w-3xl text-slate-300">
            Technology Science Corporation holds a range of government-wide
            and agency-specific contract vehicles supporting federal missions.
          </p>
        </div>
      </section>

      {/* Contracts List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl space-y-12">
          {contracts.map((contract, index) => (
            <div
              key={index}
              className="border rounded-lg p-8 shadow-sm hover:shadow-lg transition grid md:grid-cols-3 gap-8 items-start"
            >
              {/* Left: text content */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-1 text-black">
                  {contract.title}
                  {contract.linkHref && (
                    <>
                      {" "}
					  <a
                        href={contract.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-700 hover:text-blue-500 text-lg">
                        {contract.linkText}
                      </a>
                    </>
                  )}
                </h2>
                <p className="italic text-gray-500 mb-3">{contract.period}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {contract.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* Right: logo + caption */}
              <div className="flex flex-col items-center text-center">
                <Image
                  src={contract.logo}
                  alt={contract.logoCaption}
                  width={200}
                  height={130}
                  className="mb-3"
                />
                <p className="text-sm text-gray-500">{contract.logoCaption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}