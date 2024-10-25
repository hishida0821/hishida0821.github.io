import client from "@/libs/client";
import Musthead from "@/components/Musthead.js";
import SecondaryHeading from "@/components/SecondaryHeading";
import TertiaryHeading from "@/components/TertiaryHeading";
import CardList from '@/components/CardList';
import Card from '@/components/Card';
import Button from '@/components/Button';
import styles from "@/styles/home.module.scss";

const formatDate = (dateString) => {
  if (!dateString) return '不明';
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ja-JP', options).replace(/\//g, '.');
  return formattedDate;
};

// works取得
async function fetchWorks() {
  const data = await client.get({
    endpoint: 'works',
    queries: { limit: 3, orders: '-publishedAt' },
  })
  return data.contents;
}

// blog取得
async function fetchBlog() {
  const data = await client.get({
    endpoint: 'blog',
    queries: { limit: 3, orders: '-publishedAt' },
  })
  return data.contents;
}

const Home = async () => {
  const worksData = await fetchWorks();
  const blogData = await fetchBlog();
  return (
    <>
      <section className={styles.home_musthead}>
        <Musthead />
      </section>

      {/* <section className={styles.home_section}>
        <SecondaryHeading text="ABOUT"/>
        <p className={styles.home_common_text}>
          東京都在住のWebディレクター兼、マークアップエンジニアです。<br />
          Wordpressを使用したwebサイトの構築や、某新聞社関連のサイト、LP制作を主に行っています。
        </p>
        <TertiaryHeading text="保有スキル"/>
        <p className={styles.home_common_text}>
          言語 : Html,Pug,Css,Scss,JavaScript,Jquery,PHP<br />
          フレームワーク : Next.js<br />
          その他 : Wordpress、MicroCMS
        </p>
      </section> */}

      <section className={styles.home_section}>
        <SecondaryHeading text="WORKS" />
        <p className={styles.home_lead_text}>
          過去に制作したプロダクトです。
        </p>
        <CardList>
          {worksData.map((work) => (
            <div key={work.id}>
              <Card
                url={`/works/${work.id}`}
                image={work.eyecatch.url}
                title={work.title}
                category={`${work.category.name}`}
                date={formatDate(work.publishedAt)}
                text={work.text}
              />
            </div>
          ))}
        </CardList>
        <Button variant="next" url="/works/">MORE</Button>
      </section>

      <section className={styles.home_section}>
        <SecondaryHeading text="BLOG" />
        <p className={styles.home_lead_text}>
          勉強したことや趣味に関しての備忘録です。
        </p>
        <CardList>
          {blogData.map((blog) => (
            <div key={blog.id}>
              <Card
                url={`/blog/${blog.id}`}
                image={blog.eyecatch.url}
                title={blog.title}
                category={`${blog.category.name}`}
                date={formatDate(blog.publishedAt)}
                text={blog.text}
              />
            </div>
          ))}
        </CardList>
        <Button variant="next" url="/blog/">MORE</Button>
      </section>
    </>
  );
}

export default Home;