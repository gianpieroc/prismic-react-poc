import React from 'react';
import Prismic from 'prismic-javascript';
import qs from 'qs';
import PrismicConfig from './prismic-configuration';

export default class Preview extends React.Component {
  componentDidUpdate() {
    if (this.props.prismicCtx) {
      console.log(this.props.prismiCtx);
      const params = qs.parse(this.props.location.search.slice(1));
      console.log(params, this.props.prismicCtx);
      this.props.prismicCtx.api
        .previewSession(params.token, PrismicConfig.linkResolver, '/')
        .then(url => {
          console.log(url);
          this.props.history.push(url);
        });
    }
  }

  render() {
    return <p>Loading previews...</p>;
  }
}
