import { Ubuntu } from "next/font/google";
import '@/styles/globals.scss'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout.js";

export const metadata = {
  title: "Hiroki Ishida",
  description: "",
};

const ubuntu = Ubuntu({
  weight: "700",
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={ubuntu.className}>
        <Header />
        <main>
          <Layout>
            {children}
          </Layout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
