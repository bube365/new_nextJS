"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Provider from "@components/Provider";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setMyProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setMyProviders();
  }, []);
  return (
    <nav className="w-full flex justify-between mb-16 pt-3">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />

        <p className="logo_text">Prompto</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                className="rounded-full"
                alt="profile-logo"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;