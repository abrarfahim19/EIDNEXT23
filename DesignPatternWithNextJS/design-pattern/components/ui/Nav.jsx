"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Button } from "./Button";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  console.log("Providers are", providers);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="w-full border-4 border-blue-500 p-10">
      <Link href="/" className="">
        <p className="border border-red-500">Thoughts</p>
      </Link>
    </nav>
  );
};

export default Nav;
