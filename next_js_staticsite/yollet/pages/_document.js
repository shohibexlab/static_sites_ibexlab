
    import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="/favicon.png"
      type="image/x-icon"
    />
    {/* Title Name can be changed through here */}
    <title>Yollet</title>
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