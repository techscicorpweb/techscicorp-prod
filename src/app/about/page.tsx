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
		    SBA Certified 8(a), SDVOSB, EDWOSB
            ISO: 9001:2015 | 14001:2015
			GSA MAS:  GS-35F-445GA
			GSA MAS: 47QTCA25D007G (TSC-ITG2 JV)
			GSA STARS III:  47QTCB22D0521  (TSC-ITG JV)
			GSA OASIS+
			SB: 47QRCA25DSF73 SDVOSB: 47QRCA25DV098, WOSB: 47QRCA25DW137 8(a) 47QRCA25DA390
            (TSC-SPTRM-JV)
			Contract Partnerships:
			ITES-3H &3S, NASA SEWP V 
	    </div>
      </section>
	</main>
  );
}