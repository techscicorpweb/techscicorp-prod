export default function PhilanthropyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-4">
            Philanthropy
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Giving Back to Those Who Served
          </h1>

          <p className="text-lg text-slate-200 max-w-3xl leading-relaxed">
            Technology Science Corporation is proud to support 7Benefit LTD,
            a nonprofit organization dedicated to supporting veterans and
            helping address veteran homelessness throughout the Washington,
            D.C., Maryland, and Virginia region.
          </p>
        </div>
      </section>

      {/* About 7Benefit */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
              Featured Organization
            </p>

            <h2 className="text-3xl font-bold mb-6">
              7Benefit LTD
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              7Benefit LTD is a 501(c)(3) nonprofit organization committed to
              serving veterans in need and bringing communities together to
              make a meaningful impact.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Through community partnerships, fundraising events, and direct
              support initiatives, 7Benefit works to provide resources and
              assistance to veterans facing homelessness and other challenges.
            </p>

            <a
              href="https://www.7benefit.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition"
            >
              Learn More About 7Benefit
            </a>
          </div>

          {/* Replace with 7Benefit image or logo */}
          <div className="bg-gray-100 rounded-lg min-h-[320px] flex items-center justify-center p-8">
            <p className="text-gray-500 text-center">
              7Benefit LTD Logo or Community Impact Photo
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Impact */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Supporting Our Veteran Community
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our support of 7Benefit reflects a shared commitment to service,
              community, and creating opportunities to support the men and
              women who have served our country.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Veteran Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting programs and initiatives that provide resources to
                veterans and their families.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Community Engagement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bringing businesses, community members, and supporters
                together through events and partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Fighting Veteran Homelessness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Helping connect veterans experiencing housing insecurity with
                resources and support within the DMV community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="border-t border-gray-200 pt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Involved
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Learn more about 7Benefit LTD, upcoming events, and opportunities
            to support its mission.
          </p>

          <a
            href="https://www.7benefit.org/events.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-700 transition"
          >
            View Upcoming Events
          </a>
        </div>
      </section>
    </main>
  );
}