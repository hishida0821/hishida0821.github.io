import client from "@/libs/client";
import styles from "@/styles/article.module.scss";

const formatDate = (dateString) => {
  if (!dateString) return '不明';
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ja-JP', options).replace(/\//g, '.');
  return formattedDate;
};

const fetchWork = async (id) => {
  const data = await client.get({ endpoint: 'works', contentId: id });
  return data;
};

const WorksPage = async ({ params }) => {
  const { id } = params;
  const work = await fetchWork(id);

  return (
    <div className={styles.article}>
      <h1 className={styles.article_title}>{work.title}</h1>
      <span className={styles.article_category}>{work.category.name}</span>
      <p className={styles.article_date}>{formatDate(work.publishedAt)}</p>
      {work.eyecatch && (
        <figure className={styles.article_thumbnail}>
          <img
            src={work.eyecatch.url}
            alt={work.eyecatch.alt || 'アイキャッチ画像'}
          />
        </figure>
      )}
      <div className={styles.article_content}>
        <div
          dangerouslySetInnerHTML={{
            __html: `${work.content}`,
          }}
          />
        </div>
      </div>
  );
};

export default WorksPage;

export async function generateStaticParams() {
  const data = await client.get({ endpoint: 'works' });

  const paths = data.contents.map((content) => ({
    id: content.id,
  }));

  return paths;
}