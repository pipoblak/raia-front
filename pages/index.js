import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import Header from '../components/Header';
import TranslateInstance from '../i18n';

export const Home = ({ t }) => {
  return (
    <>
      <Head>
        <title>Raia Drogasil - {t('title')}</title>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          name="viewport"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Container>
        <Header />
      </Container>
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default TranslateInstance.withTranslation('common')(Home);
