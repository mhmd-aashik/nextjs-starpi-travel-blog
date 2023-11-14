import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    {
      id: 1,
      displayName: "the camp",
      slug: "/",
    },
    {
      id: 2,
      displayName: "the experience",
      slug: "/experience",
    },
    {
      id: 3,
      displayName: "the blog",
      slug: "/blog",
    },
    {
      id: 4,
      displayName: "the events",
      slug: "/events",
    },
  ];

  const policies = [
    { id: 1, displayName: "Imprint", slug: "/imprint" },
    { id: 2, displayName: "Terms and conditions", slug: "/tact" },
    { id: 3, displayName: "data production", slug: "/data- production" },
  ];
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={79}
          height={123}
          className="footer__logo"
        />
        <ul className="footer__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.slug}>
                <h5>{link.displayName}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => (
            <li key={policy.id} href={policy.slug}>
              <p className="copy">{policy.displayName}</p>
            </li>
          ))}
        </ul>
        <p className="copy">&copy; Sam&apos;s Surface-all rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
