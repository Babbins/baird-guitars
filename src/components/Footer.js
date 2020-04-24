import React from "react";
import { Link } from "gatsby";
import Instagram from "../img/social/instagram.svg";
import styled from "@emotion/styled";

const ContactLink = styled.a`
  display: block;
  color: #200000;
  font-size: 16px;
  margin-bottom: 5px;
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <footer
      css={{
        width: "80%",
        margin: "80px auto 40px auto",
      }}
    >
      <hr
        css={{
          border: "2px solid #200000",
        }}
      ></hr>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Link
          to="/"
          css={{
            fontFamily: "jinx",
            fontSize: "50px",
          }}
        >
          B
        </Link>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ContactLink href="mailto:bairdguiatrs@gmail.com">
            bairdguitars@gmail.com
          </ContactLink>
          <ContactLink href="tel:718-344-8587">718-344-8587</ContactLink>
          <a href="https://instagram.com/byurrt">
            <Instagram width="30px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
