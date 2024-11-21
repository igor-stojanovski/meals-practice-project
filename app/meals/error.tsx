"use client";

import React from "react";

type Props = {
  error: any;
};

export default function Error({ error }: Props) {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>{error.message}</p>
    </main>
  );
}
