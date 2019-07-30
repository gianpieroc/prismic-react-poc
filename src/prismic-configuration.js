export default {
  apiEndpoint: "https://prismic-proof-of-concept.cdn.prismic.io/api/v2",
  accessToken: "MC5YVHIzR3hFQUFDRUF5dUNu.H--_vWF377-9EQofWHwP77-9V--_ve-_vS9XHO-_ve-_vVLvv73vv704TllDFDXvv70tHQ",
  clientId: 'XTr3GxEAACMAyuCm',
  clientSecret: '48258d73fe57eff7be7398e5805b4e76',
  linkResolver(doc) {
    if (doc.type === "page") return `/page/${doc.uid}`;
    return "/";
  }
};
