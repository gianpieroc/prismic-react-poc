import "whatwg-fetch";
import Prismic from "prismic-javascript";
import PrismicConfig from "./prismic-configuration";

const graphQLQuery = `{
  Main {
    ...fields
  }
}`;

const refreshToolbar = prismicContext => {
  const maybeCurrentExperiment =
    prismicContext && prismicContext.api.currentExperiment();
  console.log("maybecurrentexp", maybeCurrentExperiment);
  if (maybeCurrentExperiment) {
    window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
  }
  window.PrismicToolbar.setup(PrismicConfig.apiEndpoint);
};

export const usePrismicContext = async (context, updateContextCb) => {
  try {
    const { linkResolver, apiEndpoint: endpoint, accessToken } = PrismicConfig;
    const api = await Prismic.api(PrismicConfig.apiEndpoint, {
      accessToken
    });

    return updateContextCb({
      api,
      endpoint,
      accessToken,
      linkResolver,
      refreshToolbar: () => refreshToolbar(context)
    });
  } catch (error) {
    console.error(
      `Cannot contact the API, check your prismic configuration:\n${error}`
    );
  }
};

export const useCustomTypesContext = async (context, updateContextCb, prismicContext) =>  {
  try {
    if (context) {
      const { api } = context;
      const result = await api.query(
        Prismic.Predicates.at("document.type", "main-dashboard")
      );
      console.log(result)
      updateContextCb(result);
    }
  } catch (error) {
     console.error(
      "Error fetching prismic on Preview component: ",
      error.message
    );
  }
};

export const linkResolver = (doc) => {
  if (doc.type === 'main-dashboard') {
    return '/dashboard/' + doc.uid;
  }
  return '/';
}