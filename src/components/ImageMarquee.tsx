import Image from "next/image";

const marqueeImages = [
  "/marq-USVA-logo.png",
  "/marq-CBP-logo.png",
  "/marq-USNavy-logo.png",
  "/marq-NIH-logo.png",
  "/marq-5.png",
  "/marq-6.png",
];

export default function ImageMarquee() {
  // Duplicate the list so the loop is seamless (second copy picks up
  // right as the first one scrolls out)
  const images = [...marqueeImages, ...marqueeImages];

  return (
    <div className="marquee-container overflow-hidden bg-white py-10 border-t">
      <div className="flex w-max animate-marquee gap-2">
        {images.map((src, i) => (
          <div key={i} className="flex items-center justify-center shrink-0 h-20 w-40">
            <Image
              src={src}
              alt=""
              width={160}
              height={80}
              className="object-contain max-h-20 w-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
}