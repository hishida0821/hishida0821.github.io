import React from 'react'
import client from "@/libs/client";
import PrimaryHeading from '@/components/PrimaryHeading';
import CardList from '@/components/CardList';
import Card from '@/components/Card';
import BackButton from '@/components/BackButton';

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
        {worksData.map((work, category) => (
          <div key={work.id}>
            <Card
              url={`/works/${work.id}`}
              image={work.eyecatch.url}
              title={work.title}
              // category={`${category.name}`}
              date={formatDate(work.publishedAt)}
              text={work.text}
            />
          </div>
        ))}
      </CardList>
      <BackButton />
    </>
  )
}

export default works
