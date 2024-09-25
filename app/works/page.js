import React from 'react'
import Link from 'next/link';
import client from "@/libs/client";

const formatDate = (dateString) => {
  if (!dateString) return '不明';
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ja-JP', options).replace(/\//g, '.');
  return formattedDate;
};

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
            <Link href={`/works/${work.id}`}>
              {work.eyecatch && (
                <figure>
                  <img
                    src={work.eyecatch.url}
                    alt={work.eyecatch.alt || 'アイキャッチ画像'}
                  />
                </figure>
              )}
              <span>{formatDate(work.publishedAt)}</span>
              <p>{work.title}</p>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default works
