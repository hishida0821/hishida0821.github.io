import client from "@/libs/client";

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

const WorkPage = async ({ params }) => {
  const { id } = params;
  const work = await fetchWork(id);

  return (
    <>
      <h1>{work.title}</h1>
      <p>{formatDate(work.publishedAt)}</p>
      {work.eyecatch && (
        <figure>
          <img
            src={work.eyecatch.url}
            alt={work.eyecatch.alt || 'アイキャッチ画像'}
          />
        </figure>
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: `${work.content}`,
        }}
      />
    </>
  );
};

export default WorkPage;

export async function generateStaticParams() {
  const data = await client.get({ endpoint: 'works' });

  const paths = data.contents.map((content) => ({
    id: content.id,
  }));

  return paths;
}