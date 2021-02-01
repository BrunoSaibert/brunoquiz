import Head from 'next/head';

interface HeadProps {
  title: string;
  description: string;
  bg: string;
  shareRoute?: string;
}

const HeadContent: React.VFC<HeadProps> = ({
  title,
  description,
  bg,
  shareRoute,
}) => {
  const route = `https://brunoquiz.vercel.app/${shareRoute}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="BrunoQuiz" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={route} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={route} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bg} />
    </Head>
  );
};

export default HeadContent;
