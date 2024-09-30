import { Ubuntu } from "next/font/google";
import styles from '@/styles/global.module.scss'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout.js";

export const metadata = {
  title: "Hiroki Ishida",
  description: "",
};

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.html}>
      <body className={`${ubuntu.className} ${styles.body}`}>
        <Header />
        <main className={styles.main}>
          <Layout>
            {children}
          </Layout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
