import React from 'react'
import SecondaryHeading from '@/components/SecondaryHeading'
import TertiaryHeading from "@/components/TertiaryHeading";

export default function About() {
  return (
    <>
      <SecondaryHeading text="ABOUT" />
      <p>
        東京都在住のWebディレクター兼、マークアップエンジニアです。<br />
        Wordpressを使用したwebサイトの構築や、某新聞社関連のサイト、LP制作を主に行っています。
      </p>
      <TertiaryHeading text="保有スキル"/>
      <p>
        言語 : Html,Pug,Css,Scss,JavaScript,Jquery,PHP<br />
        フレームワーク : Next.js<br />
        その他 : Wordpress、MicroCMS
      </p>
    </>
  )
}
