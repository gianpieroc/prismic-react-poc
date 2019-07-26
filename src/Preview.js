import React, { useEffect } from "react";
import qs from "qs";
import PrismicConfig from "./prismic-configuration";

const Preview = ({ location, prismicContext, history }) => {
  const getUrl = async () => {
    try {
      if (prismicContext) {
        const params = qs.parse(location.search.slice(1));
        console.log(params)
        const url = await prismicContext.api.previewSession(
          params.token,
          PrismicConfig.linkResolver,
          "/"
        );
        if (url) {
          history.push(url);
        }
      }
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    getUrl();
  }, []);

  return <p>Loading previews...</p>;
};

export default Preview;
