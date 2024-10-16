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

async function fetchBlog() {
  const data = await client.get({ endpoint: 'blog'})
  return data.contents;
}

const Blog = async () => {
  const blogData = await fetchBlog();

  return (
    <>
      <PrimaryHeading text="BLOG" />
      <CardList>
        {blogData.map((blog) => (
          <div key={blog.id}>
            <Card
              url={`/blog/${blog.id}`}
              image={blog.eyecatch.url}
              title={blog.title}
              date={formatDate(blog.publishedAt)}
              text={blog.text}
            />
          </div>
        ))}
      </CardList>
    </>
  )
}

export default Blog
