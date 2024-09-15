
import styles from '@/styles/global.module.scss'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout.js";

export const metadata = {
  title: "Hiroki Ishida",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
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
