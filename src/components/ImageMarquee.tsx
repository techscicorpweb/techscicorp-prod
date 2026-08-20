import Image from "next/image";

const marqueeImages = [
  { src: "/marq-USVA-logo.png", name: "US Department of Veterans Affairs" },
  { src: "/marq-CBP-logo.png", name: "US Customs and Border Protection" },
  { src: "/marq-USNavy-logo.png", name: "US Navy" },
  { src: "/marq-NIH-logo.png", name: "National Institutes of Health" },
  { src: "/marq-FBI-logo.png", name: "FBI" },
  { src: "/marq-FTC-logo.png", name: "FTC" },
  { src: "/marq-USSOC-logo.png", name: "US Special Operations Command" },
  { src: "/marq-FDA-logo.png", name: "FDA" },
  { src: "/marq-DISA-logo.png", name: "DISA" },
  { src: "/marq-PentagonFPA-logo.png", name: "Pentagon Force Protection Agency" },
  { src: "/marq-FairfaxCo-logo.png", name: "Fairfax County, VA" },
  { src: "/marq-MDGaming-logo.webp", name: "Maryland Gaming Commission" },
  { src: "/marq-atf-logo.png", name: "Bureau of Alcohol, Tobacco, Firearms and Explosives" },
  { src: "/marq-dha-logo.png", name: "Defense Health Agency" },
  { src: "/marq-doj-logo.png", name: "Department of Justice" },
];

export default function ImageMarquee() {
  // Duplicate the list so the loop is seamless (second copy picks up
  // right as the first one scrolls out)
  const images = [...marqueeImages, ...marqueeImages];

  return (
    <div className="bg-white py-10 border-t">
      <h2 className="text-2xl font-semibold text-black text-center mb-8">
        TSC Clients
      </h2>
      <div className="marquee-container overflow-hidden">
        <div className="flex w-max animate-marquee gap-2">
          {images.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center shrink-0 h-40 w-56">
              <Image
                src={item.src}
                alt={item.name}
                width={224}
                height={112}
                className="object-contain max-h-28 w-auto"
              />
              <p className="text-sm text-gray-500 mt-2 text-center leading-tight">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}