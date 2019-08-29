import React from "react";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";
import { Link } from "gatsby";

export const NAV_HEIGHT = {
  MOBILE: 80,
  DESKTOP: 90
};

const Nav = ({ heading }) => (
  <section
    css={css`
      position: fixed;
      top: 0;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 1;
      height: ${NAV_HEIGHT.MOBILE}px;
      ${mq[0]} {
        height: ${NAV_HEIGHT.DESKTOP}px;
      }
      background-color: #fffaf0;
    `}
  >
    <Link
      css={{
        textDecoration: "none"
      }}
      to="/"
    >
      <h1
        css={css`
          font-size: 40px;
          ${mq[0]} {
            font-size: 80px;
          }
          font-family: "Untitled1";
          font-weight: 300;
        `}
      >
        {heading}
      </h1>
    </Link>
  </section>
);

export default Nav;
