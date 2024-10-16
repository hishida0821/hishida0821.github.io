import Musthead from "@/components/Musthead.js";
import SecondaryHeading from "@/components/SecondaryHeading";
import TertiaryHeading from "@/components/TertiaryHeading";
import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.home_musthead}>
        <Musthead />
      </section>

      <section className={styles.home_about}>
        <SecondaryHeading text="ABOUT"/>
        <p className={styles.home_about_text}>
          東京都在住のWebディレクター兼、マークアップエンジニアです。<br />
          Wordpressを使用したwebサイトの構築や、某新聞社関連のサイト、LP制作を主に行っています。<br />
          <br />
          バイク乗りです。<br />
          元々はSR400に乗っていましたが、今はDax50をカスタムして楽しんでいます。(大型自動二輪免許持ち)
        </p>
        <TertiaryHeading text="保有スキル"/>
        <p className={styles.home_about_text}>
          言語 : Html,Pug,Css,Scss,JavaScript,Jquery,PHP<br />
          フレームワーク : Next.js<br />
          その他 : Wordpress、MicroCMS
        </p>
      </section>
    </>
  );
}
