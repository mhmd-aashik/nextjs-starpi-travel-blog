import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
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
  ];
  return (
    <header className="header">
      <Image
        width={50}
        height={77}
        src="/assets/logo.svg"
        alt="logo"
      />
      <ul className="header__nav">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.slug}>
              <h5>{link.displayName}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/events">
        <button className="btn btn--black btn--small">Book Now</button>
      </Link>
    </header>
  );
};

export default Header;
