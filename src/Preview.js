import React, { useEffect } from "react";
import qs from "qs";
import PrismicConfig from "./prismic-configuration";

const Preview = ({ location, prismicContext, history }) => {
  const getUrl = async () => {
    try {
      if (prismicContext) {
        const { linkResolver } = PrismicConfig;
        const params = qs.parse(location.search.slice(1));
        const url = await prismicContext.api.previewSession(
          params.token,
          linkResolver,
          "/"
        );
        if (url) {
          history.push(url);
        }
      }
    } catch (error) {
      console.error(
        "Error fetching prismic on Preview component: ",
        error.message
      );
    }
  };

  useEffect(() => {
    getUrl();
  }, [prismicContext]);

  return <p>Loading previews...</p>;
};

export default Preview;
