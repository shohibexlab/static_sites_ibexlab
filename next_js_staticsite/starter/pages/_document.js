
    import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    const PAGE_TITLE = process.env.PAGE_TITLE;
    const PAGE_FAVICON = process.env.PAGE_FAVICON;
    return (
      <Html>
        <Head>
        <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href={PAGE_FAVICON}
      type="image/x-icon"
    />
    {/* Title Name can be changed through here */}
    <title>{PAGE_TITLE}</title>
        </Head>
        <body style={{"overflowX": "hidden","overflowY": "hidden"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument