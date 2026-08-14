import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";
import Image from "next/image";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

type Leader = {
  _id: string;
  name: string;
  title: string;
  bio?: string;
  photo?: any;
};

async function getLeadership(): Promise<Leader[]> {
  const leaders = await client.fetch(
    `*[_type == "leadership"]{
      _id,
      name,
      title,
      bio,
      photo
    }`
  );

  const order = ["Thu Stubbs", "Jim Terwilliger", "Dwayne Thomas, CPA"];

  return leaders.sort((a: Leader, b: Leader) => {
    const aIndex = order.indexOf(a.name);
    const bIndex = order.indexOf(b.name);
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
}

export const revalidate = 60; // seconds

export default async function AboutPage() {
  // ...everything else in the file stays exactly as-is
  const leadership = await getLeadership();

  const corporateProfile = [
    "SBA Certified 8(a), SDVOSB, EDWOSB",
    "ISO: 9001:2015 | 14001:2015",
    "GSA MAS: GS-35F-445GA",
    "GSA MAS: 47QTCA25D007G (TSC-ITG2 JV)",
    "GSA STARS III: 47QTCB22D0521 (TSC-ITG JV)",
    "GSA OASIS+",
    "SB: 47QRCA25DSF73, SDVOSB: 47QRCA25DV098, WOSB: 47QRCA25DW137, 8(a): 47QRCA25DA390 (TSC-SPTRM-JV)",
    "Contract Partnerships: ITES-3H & 3S, NASA SEWP V",
  ];

  const businessCategory = [
    "SBA Certified 8(a) Small Disadvantaged Business (SDB)",
    "Verified Service-Disabled Veteran-Owned Small Business (SDVOSB)",
    "Economically Disadvantaged Women-Owned Small Business (EDWOSB)",
    "Minority Owned Small Business",
    "Small Disadvantage Business (SDB)",
    "Local Disadvantaged Business Enterprise (LDBE) (May 2023)",
    "8(a) Sole Source Pool",
  ];

  const NAICS = [
    "238210 – Electrical and Other Wiring Installation Contractors",
    "541330 – Engineering Services",
    "541511﻿ – Custom Computer Programing Services",
    "541512 – ﻿﻿Computer Systems Design Services﻿﻿",
    "541513 – Computer Facilities Management Services",
    "541519 – Other Computer Related Services",
    "541611 – Administrative Management Consulting Services (Primary)",
    "541614 – Process, Physical Distribution, and Logistics Consulting Services ",
    "541618 – Other Management Consulting Services",
    "541990 – All Other Professional, Scientific, and Technical Services",
    "561210 - Facility Support Services",
    "561920 – Convention and Trade Show Organizers",
    "611620 –  Sports and Recreation Instruction",
  ];

  const Misc = [
    "Unique Entity ID (UEI): MUVEWBGLVKV9",
    "DUNS: 005824619",
    "CAGE Code: 5FVF7",
    {
      text: "GSA MAS: GS-35F-445GA",
      href: "https://www.gsaelibrary.gsa.gov/ElibMain/contractorInfo.do?contractNumber=GS-35F-445GA&contractorName=TECHNOLOGY+SCIENCE+CORP&executeQuery=YES",
    },
    "ISO Certified (2025): 9001:2015 & 14001:2015",
    "MWAA LDBE #: LD2014-0043-2017",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl font-bold mb-6">
            About Technology Science Corporation
          </h1>
          <p className="text-lg">
            Technology Science Corporation supports government agencies
            through innovative technology solutions and mission-focused
            service delivery.
            
            We encourage and promote a culture heavily vested in creative problem solving, responsiveness, process improvement, high quality results, and out-of-the box best value solutions. We execute by listening to an agency’s issues, encourage transparent communications to meet tight deadlines, and perform with integrity.
            We understand the federal procurement framework and the importance of collaborating with Enduser, Program Management, and Contracting to execute within budget. Our goal is to be your agency’s trusted IT partner of choice!
          </p>

          {/* Added top margin (mt-10) for spacing above */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
           Leadership
          </h2>
            <div className="space-y-12">
              {leadership.map((leader) => (
                <div key={leader._id} className="flex flex-col md:flex-row gap-8 items-start">
                  {leader.photo && (
                    <Image
                      src={urlFor(leader.photo).width(400).url()}
                      alt={leader.name}
                      width={220}
                      height={220}
                      className="object-cover shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{leader.name}</h3>
                    <h4 className="text-xl font-semibold text-slate-200 mb-4">{leader.title}</h4>
                    {leader.bio && (
                      <div className="space-y-4 text-slate-300">
                        {leader.bio.split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Corporate Profile
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {corporateProfile.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Business Category
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {businessCategory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            NAICS
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {NAICS.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Other
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {Misc.map((item, index) => {
              if (typeof item === "object") {
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-300 hover:text-blue-200"
                    >
                      {item.text}
                    </a>
                  </li>
                );
              }
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}