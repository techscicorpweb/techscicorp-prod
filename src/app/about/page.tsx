export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
	      <h1 className="text-4xl font-bold mb-6">
           About Technology Science Corporation
          </h1>
          <p className="text-lg">
           Technology Science Corporation supports
           government agencies through innovative
           technology solutions and mission-focused
           service delivery.
          </p>
      {/* Added top margin (mt-10) for spacing above */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
           Leadership
          </h2>
	      <h2 className="text-2xl font-semibold mt-10 mb-4">
           Corporate Profile
	      </h2>
	    </div>
      </section>
	</main>
  );
}