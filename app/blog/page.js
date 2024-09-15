import React from 'react'
import Link from 'next/link';
import { client } from "@/libs/client";

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
    <div>
      this is blog page

      <ul>
        {blogData.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              {blog.eyecatch && (
                <figure>
                  <img
                    src={blog.eyecatch.url}
                    alt={blog.eyecatch.alt || 'アイキャッチ画像'}
                  />
                </figure>
              )}
              <span>{formatDate(blog.publishedAt)}</span>
              <p>{blog.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
