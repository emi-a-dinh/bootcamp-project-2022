import React from "react";
import style from "./blogPreview.module.css";
import { blog } from "@/app/static/blogData";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPreview({
  name,
  image,
  imageAlt,
  slug,
}: blog) {
  return (
    <div className={style.blogContainer}>
      <h3 className={style.blogTitle}>
        <Link href={`/blog/${slug}`}>{name}</Link>
      </h3>
      <Image src={image} alt={imageAlt} width={500} height={500}></Image>
    </div>
  );
}
