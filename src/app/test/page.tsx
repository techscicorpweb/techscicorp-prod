import { client } from '../../lib/sanity'

export default async function TestPage() {
  const jobs = await client.fetch(`*[_type == "job"]`)

  return (
    <pre>
      {JSON.stringify(jobs, null, 2)}
    </pre>
  )
}