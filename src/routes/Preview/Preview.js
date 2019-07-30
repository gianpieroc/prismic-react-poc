import React, { useEffect, useState, Fragment } from "react";
import { Date, Link, RichText, Title } from "prismic-reactjs";

import { useCustomTypesContext, linkResolver } from "../../utils";

const Preview = ({ prismicContext }) => {
  const [doc, setDoc] = useState(null);
  useEffect(() => {
    useCustomTypesContext(prismicContext, setDoc);
  }, [prismicContext]);
  console.log(doc);

  if (doc && doc.data) {
    return (
      <Fragment>
        <Title render={doc.data.title} linkResolver={linkResolver} />
        <RichText render={doc.data.rich_texts} linkResolver={linkResolver} />
      </Fragment>
    );
  }

  return <h1> NO DATA </h1>;
};

export default Preview;
