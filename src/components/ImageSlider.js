import React from "react";
import Slider from "react-slick";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../utils/mediaQueries";
import Lightbox from "react-image-lightbox";
import Img from "gatsby-image";

const ImageSlider = ({ images, className }) => {
  const [isOpenLightbox, setIsOpenLightbox] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(null);

  const settings = {
    dots: true,
    dotsClass: "slick-image-gallery",
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(i) {
      return (
        <a>
          <Img
            css={css`
              width: 100%;
            `}
            fluid={images[i].childImageSharp.fluid}
            key={images[i].childImageSharp.fluid.src}
          />
        </a>
      );
    },
  };

  return (
    <div
      className={className}
      css={css`
        ${mq[2]} {
          width: 80%;
          margin: 0 auto;
        }
      `}
    >
      <Slider {...settings}>
        {images.map((image) => (
          <div
            css={css`
              cursor: pointer;
            `}
            onClick={() => {
              setCurrentImage(image.childImageSharp.fluid.src);
              setIsOpenLightbox(true);
            }}
            key={image.childImageSharp.fluid.src}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              key={image.childImageSharp.fluid.src}
            />
          </div>
        ))}
      </Slider>
      {isOpenLightbox && currentImage && (
        <Lightbox
          mainSrc={currentImage}
          onCloseRequest={() => setIsOpenLightbox(false)}
        />
      )}
    </div>
  );
};

export default ImageSlider;
