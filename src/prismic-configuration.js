export default {
  apiEndpoint: 'https://prismic-proof-of-concept.cdn.prismic.io/api/v2',

  // -- Access token if the Master is not open
  accessToken: 'MC5YVHIzR3hFQUFDRUF5dUNu.H--_vWF377-9EQofWHwP77-9V--_ve-_vS9XHO-_ve-_vVLvv73vv704TllDFDXvv70tHQ',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver(doc) {
    if (doc.type === 'page') return `/page/${doc.uid}`;
    return '/';
  }
};
