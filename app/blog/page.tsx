import Link from "next/link";
import React from "react";

export default function BlogPostPage() {
  return (
    <main>
      <h1>Blog Post Page</h1>
      <p>
        <Link href={"/blog/blog-1"}>Blog 1</Link>
      </p>
      <p>
        <Link href={"/blog/blog-2"}>Blog 2</Link>
      </p>
    </main>
  );
}
