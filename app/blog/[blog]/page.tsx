import React from "react";

type Props = {
  params: any;
};

export default function BlogPost({ params }: Props) {
  return (
    <main>
      <h1>BlogPost {params.blog}</h1>
    </main>
  );
}
