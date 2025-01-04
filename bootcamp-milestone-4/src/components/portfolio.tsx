import React from "react";
import styles from "./portfolio.module.css";
import { Portfolio } from "@/app/static/portfolioData";
import Image from "next/image";

export default function PortfolioComp({
  projectName,
  image,
  imageAlt,
  projectDetails,
}: Portfolio) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones

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
      </div>
    </div>
  );
}
