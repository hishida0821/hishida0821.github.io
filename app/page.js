import Image from "next/image";
import nextConfig from "../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
      <h1>this is home page</h1>
  );
}
