import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import { withTranslation } from '../i18n';

export const Home = ({ t }) => {
  return (
    <>
      <Head>
        <title>Raia Drogasil - {t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container></Container>
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(Home);
