import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";

export const metadata = {
  title: "Careers | Technology Science Corporation",
  description:
    "Join Technology Science Corporation — explore open positions supporting critical missions in engineering, IT, and program management.",
};

type Job = {
  _id: string;
  title: string;
  location?: string;
  clearance?: string;
  description?: string;
  postedDate?: string;
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function CareersPage() {
  const jobs: Job[] = await client.fetch(
    `*[_type == "job"] | order(postedDate desc)`
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl font-bold mb-6">Careers</h1>
          <p className="text-xl max-w-3xl text-slate-300">
            Join a team delivering innovative scientific, engineering, and
            technical solutions that support critical missions and advance
            technology.
          </p>
        </div>
      </section>

      {/* Job Cards */}
      <section className="pt-20 pb-8 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {jobs.length === 0 ? (
            <p className="text-gray-600 text-lg">
              There are no open positions at this time. Please check back
              soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="border rounded-lg p-8 shadow-sm hover:shadow-lg transition flex flex-col"
                >
                  <h2 className="text-2xl font-semibold mb-2 text-black">
                    {job.title}
                  </h2>

                  {(job.location || job.clearance) && (
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      {job.location}
                      {job.location && job.clearance ? " \u00b7 " : ""}
                      {job.clearance}
                    </p>
                  )}

                  {job.postedDate && (
                    <p className="text-xs text-slate-400 mb-4">
                      Posted {formatDate(job.postedDate)}
                    </p>
                  )}

                  {job.description && (
                    <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                      {job.description}
                    </p>
                  )}

                  <Link
                    href={`/careers/${job._id}`}
                    className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-2 rounded-lg transition text-center"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* E-Verify */}
      <section className="pt-4 pb-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center">
          <Image
            src="/e-verify-logo.png"
            alt="E-Verify"
            width={200}
            height={100}
            className="mb-3"
          />
          <p className="text-sm text-slate-500">E-Verify Participation Poster!</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Don&apos;t See the Right Fit?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re always looking for talented people to support our
            mission. Send us your resume and we&apos;ll keep you in mind for
            future opportunities.
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
