import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx : DocumentContext) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
          });
        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        };
      } finally {
        sheet.seal();
      }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=DM+Sans:wght@700&display=swap" rel="stylesheet" />
                    
                    <link rel="shortcut icon" href="/logo.png" type="image/png"/>
                    <title>Eu Creio na Pregação</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}