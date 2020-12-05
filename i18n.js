import NextI18Next from 'next-i18next';
const path = require('path');

const TranslateInstance = new NextI18Next({
  defaultLanguage: 'ptBR',
  otherLanguages: ['en'],
  localeSubpaths: {},
  localePath: path.resolve('./public/static/locales'),
  serverLanguageDetection: false
});

export default TranslateInstance;
