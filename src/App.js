import React, { useEffect, useState } from "react";
import { usePrismicContext } from "./utils";
import Routes from "./routes";

export const App = () => {
  const [prismicContext, setPrismicContext] = useState(null);

  useEffect(() => {
    usePrismicContext(prismicContext, setPrismicContext);
  }, []);

  return <Routes prismicContext={prismicContext} />;
};

export default App;
