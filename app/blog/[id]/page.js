import client from "@/libs/client";
import styles from "@/styles/article.module.scss";

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

const BlogPage = async ({ params }) => {
  const { id } = params;
  const blog = await fetchBlog(id);

  return (
    <>
      <div className={styles.article}>
      <h1 className={styles.article_title}>{blog.title}</h1>
      <span className={styles.article_category}>{blog.category.name}</span>
      <p className={styles.article_date}>{formatDate(blog.publishedAt)}</p>
      {blog.eyecatch && (
        <figure className={styles.article_thumbnail}>
          <img
            src={blog.eyecatch.url}
            alt={blog.eyecatch.alt || 'アイキャッチ画像'}
          />
        </figure>
      )}
      <div className={styles.article_content}>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;

export async function generateStaticParams() {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => ({
    id: content.id,
  }));

  return paths;
}