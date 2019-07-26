import React, { useEffect, useState } from "react";
import "whatwg-fetch";
import Prismic from "prismic-javascript";
import PrismicConfig from "./prismic-configuration";
import App from "./App";

export const PrismicApp = () => {
  const [prismicContext, setPrismicContext] = useState(null);

  const refreshToolbar = () => {
    const maybeCurrentExperiment =
      prismicContext && prismicContext.api.currentExperiment();
    if (maybeCurrentExperiment) {
      window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
    }
    window.PrismicToolbar.setup(PrismicConfig.apiEndpoint);
  };

  const contextBuilt = async () => {
    const { linkResolver, apiEndpoint: endpoint, accessToken } = PrismicConfig;
    const api = await Prismic.api(PrismicConfig.apiEndpoint, {
      accessToken
    });

    return setPrismicContext({
      api,
      endpoint,
      accessToken,
      linkResolver,
      refreshToolbar
    });
  };

  useEffect(() => {
    try {
      contextBuilt();
    } catch (error) {
      console.error(
        `Cannot contact the API, check your prismic configuration:\n${error}`
      );
    }
  }, []);

  return <App prismicContext={prismicContext} />;
};

export default PrismicApp;
