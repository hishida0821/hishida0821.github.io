import React from 'react'
import Link from 'next/link';
import { client } from "@/libs/client";

async function fetchWorks() {
  const data = await client.get({ endpoint: 'works'})
  return data.contents;
}

const works = async () =>  {
  const worksData = await fetchWorks();
  return (
    <div>
      this is works page

      <ul>
        {worksData.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`}>{work.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default works
