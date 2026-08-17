import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job: Job | null = await client.fetch(
    `*[_type == "job" && _id == $id][0]`,
    { id }
  );

  return {
    title: job
      ? `${job.title} | Careers | Technology Science Corporation`
      : "Job Not Found",
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job: Job | null = await client.fetch(
    `*[_type == "job" && _id == $id][0]`,
    { id }
  );

  if (!job) return notFound();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <Link
            href="/careers"
            className="text-slate-300 hover:text-white text-sm mb-6 inline-block transition"
          >
            &larr; Back to Careers
          </Link>
          <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
          {(job.location || job.clearance) && (
            <p className="text-xl text-slate-300">
              {job.location}
              {job.location && job.clearance ? " \u00b7 " : ""}
              {job.clearance}
            </p>
          )}
          {job.postedDate && (
            <p className="text-sm text-slate-400 mt-3">
              Posted {formatDate(job.postedDate)}
            </p>
          )}
        </div>
      </section>

      {/* Job Details */}
      <section className="pt-8 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Job Description
          </h2>
          <div className="border rounded-lg p-8 shadow-sm">
            {job.description ? (
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {job.description}
              </p>
            ) : (
              <p className="text-gray-500">
                No additional details are available for this position yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Reach out to our team to submit your application for this
            position.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-3 rounded-lg transition"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}
