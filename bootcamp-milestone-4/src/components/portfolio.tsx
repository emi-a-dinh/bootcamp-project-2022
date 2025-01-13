import React from "react";
import styles from "./portfolio.module.css";
import { Portfolio } from "@/app/static/portfolioData";
import Image from "next/image";
import CommentForm from "@/components/addComment";

export default function PortfolioComp({
  projectName,
  image,
  imageAlt,
  projectDetails,
  comments,
}: Portfolio) {
  const newProjectName = "1" + projectName;

  return (
    <div className={styles.project}>
      <Image
        src={image}
        alt={imageAlt}
        className="project-image"
        width={800}
        height={500}
      ></Image>
      <div className={styles.projectBox}>
        <p className={styles.projectName}>{projectName}</p>
        <p className={styles.projectDetails}>{projectDetails}</p>
        <div className={styles.commentSection}>
          <h4 className={styles.commentTitle}>Comments: </h4>

          {comments?.length > 0 ? (
            comments.map(
              (
                comment: { user: string; comment: string; date: string },
                idx: number
              ) => (
                <div key={idx} className={styles.comment}>
                  <p>
                    <strong>{comment.user}</strong>{" "}
                    <span className={styles.commentTime}>
                      ({new Date(comment.date).toLocaleString()})
                    </span>{" "}
                    : {comment.comment}
                  </p>
                </div>
              )
            )
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}

          <CommentForm slug={newProjectName} />
        </div>
      </div>
    </div>
  );
}
