import Head from "next/head";
import ProductList from "../components/ProductList";

export default function Main() {
  return (
    <div>
      <Head>
        <title>Product Hunt Clone</title>
        <meta name="description" content="Clone of the Product Hunt homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductList />
      </main>
    </div>
  );
}
