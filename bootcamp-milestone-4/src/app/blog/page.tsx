import BlogPreview from "@/components/blogPreview";
import React from "react";
import styles from "./blog.module.css";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export default async function Blogs() {
  const list_of_blogs = await getBlogs();
  if (!list_of_blogs) {
    return <div>Blog Not Found</div>;
  } else {
    return (
      <div className={styles.blogPage}>
        <section className={styles.intro}>
          <h1 className={styles.pageTitle}>My Blogs</h1>
        </section>

        <div className={styles.blogContainer}>
          {list_of_blogs.map((blog, index) => (
            <BlogPreview
              key={index}
              name={blog.name}
              date={blog.date.toLocaleDateString()}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.imageAlt}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    );
  }
}

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).lean();

    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
