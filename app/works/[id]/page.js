import client from "@/libs/client";

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
      <p>{work.publishedAt}</p>
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