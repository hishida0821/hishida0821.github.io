import Image from "next/image";
import nextConfig from "../next.config.mjs";
import Layout from "@/components/Layout.js";
import Musthead from "@/components/Musthead.js";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <Layout>
      <Musthead />
    </Layout>
    
  );
}
