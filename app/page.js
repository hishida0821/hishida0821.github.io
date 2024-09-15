import Image from "next/image";
import styles from "./page.module.css";

import nextConfig from "../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          src={`${BASE_PATH}/vercel.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

      </main>
      <footer></footer>
    </div>
  );
}
