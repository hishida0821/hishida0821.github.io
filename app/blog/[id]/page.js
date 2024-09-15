import { client } from "@/libs/client";

const formatDate = (dateString) => {
  if (!dateString) return '不明';
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ja-JP', options).replace(/\//g, '.');
  return formattedDate;
};

const fetchBlog = async (id) => {
  const data = await client.get({ endpoint: 'blog', contentId: id });
  return data;
};

const WorkPage = async ({ params }) => {
  const { id } = params;
  const blog = await fetchBlog(id);

  return (
    <>
      <h1>{blog.title}</h1>
      {blog.eyecatch && (
        <figure>
          <img
            src={blog.eyecatch.url}
            alt={blog.eyecatch.alt || 'アイキャッチ画像'}
          />
        </figure>
      )}
      <span>{formatDate(blog.publishedAt)}</span>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </>
  );
};

export default WorkPage;

export async function generateStaticParams() {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => ({
    id: content.id,
  }));

  return paths;
}