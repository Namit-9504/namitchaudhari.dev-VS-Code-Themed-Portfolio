import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Namit Chaudhari is an AI Agent Developer passionate about building intelligent, purposeful applications that bridge technology, well-being, and real-world impact."
      />
      <meta
        name="keywords"
        content="Namit Chaudhari, Namit, Chaudhari, AI Agent Developer portfolio, Namit Ai Agent developer, Namit developer, Python , Namit Chaudhari portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Namit Chaudhari's Portfolio" />
      <meta
        property="og:description"
        content="AI Agent Developer building smart, autonomous tools using LLMs and prompt engineering."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Namit Chaudhari',
};
