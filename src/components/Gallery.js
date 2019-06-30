import React from "react";
import Img from "gatsby-image";
import mq from "../utils/mediaQueries";

const Gallery = ({ images }) => (
  <div
    css={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }}
  >
    {images.map(image => (
      <Img
        css={{
          width: "100%",
          [mq[0]]: {
            width: "33%"
          }
        }}
        fluid={image.childImageSharp.fluid}
        key={image.childImageSharp.fluid.src}
      />
    ))}
  </div>
);

export default Gallery;