import React from "react";

type Props = {
  params: any;
};

export default async function BlogPost(props: Props) {
  const params = await props.params;
  return (
    <main>
      <h1>BlogPost {params.blog}</h1>
    </main>
  );
}
