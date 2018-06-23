import React from 'react'
import { Container } from 'semantic-ui-react'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'
import AuthProvider from '../components/Context/AuthProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends React.PureComponent {
  componentDidMount() {
    const cartId = localStorage.getItem('mcart')

    if (!cartId) {
      const cartId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
        ((Math.random() * 16) | 0).toString(16)
      )
      localStorage.setItem('mcart', cartId)
    }
  }

  render() {
    const { location, children } = this.props

    return (
      <AuthProvider>
        <Helmet
          meta={[
            {
              name: 'description',
              content: 'A starter eCommerce website made using GatsbyJS',
            },
            { name: 'keywords', content: 'ecommerce, gatsby, moltin' },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' },
          ]}
        >
          <html lang="en" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={withPrefix('/favicons/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={withPrefix('/favicons/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={withPrefix('/favicons/favicon-16x16.png')}
          />
        </Helmet>
        <Headroom upTolerance={10} downTolerance={10} style={{ zIndex: '20' }}>
          <Header location={location} />
        </Headroom>
        <Container text style={{ paddingTop: '2em' }}>
          {children()}
        </Container>
        <Footer />
      </AuthProvider>
    )
  }
}

export default Layout