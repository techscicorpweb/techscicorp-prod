import { client } from '@/lib/sanity'

export default async function CareersPage() {
  const jobs = await client.fetch(`*[_type == "job"]`)

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Careers!
      </h1>

      <div className="space-y-6">
        {jobs.map((job: any) => (
          <div 
            key={job._id}
            className="border rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold">
              {job.title}
            </h2>
            
            <p>{job.location}</p>
            
            <p>{job.clearance}</p>
			
			<p>{job.description}</p>
          </div>
        ))}  
      </div>
    </main>
  );
}