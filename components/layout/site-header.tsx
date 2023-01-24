import Head from 'next/head';

const SiteHeader = () => {
  return (
    <Head>
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge,chrome=1"
      />
      <title>inTheory Research</title>
      <link
        rel="icon"
        href="/inTheory.ico"
      />
      <meta
        name="description"
        content="inTheory is a network marketplace where users can learn about and support research projects by collecting science-inspired artworks."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link
        rel="icon"
        href="/inTheory.ico"
      />
      <meta
        name="author"
        content="Impact Finance"
      />

      {/* <!-- Twitter card  --> */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content="@DeSci_Impact"
      />
      <meta
        name="twitter:creator"
        content="@DeSci_Impact"
      />
      <meta
        name="twitter:title"
        content="inTheory Research"
      />
      <meta
        name="twitter:description"
        content="inTheory is a network marketplace where users can learn about and support research projects by collecting science-inspired artworks."
      />
      <meta
        name="twitter:image"
        content="https://www.intheory.science/_next/image?url=%2Fsite%2Fmeta-image.jpg&w=1200&q=75"
      />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="inTheory Research"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content="inTheory Research"
      />
      <meta
        property="og:description"
        content="inTheory is a network marketplace where users can learn about and support research projects by collecting science-inspired artworks."
      />
      <meta
        property="og:url"
        content="https://www.intheory.science/"
      />
      <meta
        property="og:image"
        content="https://www.intheory.science/_next/image?url=%2Fsite%2Fmeta-image.jpg&w=1200&q=75"
      />
    </Head>
  );
};

export default SiteHeader;
