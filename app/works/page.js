import React from 'react'
import Link from 'next/link';
import client from "@/libs/client";
import { basePath } from "@/next.config";
const BASE_PATH = basePath ? basePath : "";
import PrimaryHeading from '@/components/PrimaryHeading';
import CardList from '@/components/CardList';
import Card from '@/components/Card';

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
  // console.log(worksData)
  return (
    <>
      <PrimaryHeading text="WORKS" />
      <CardList>
        {worksData.map((work) => (
          <div key={work.id}>
            <Card
              url={`${BASE_PATH}/works/${work.id}`}
              image={work.eyecatch.url}
              title={work.title}
              date={formatDate(work.publishedAt)}
              text={work.text}
            />
          </div>
        ))}
      </CardList>
    </>
  )
}

export default works
