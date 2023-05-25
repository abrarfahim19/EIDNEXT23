"use client";

import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div>
      <h1>This is an error page...</h1>
      <Link href={"/"}>
        <a> {"<-- "} Go To Home</a>
      </Link>
    </div>
  );
};

export default error;
