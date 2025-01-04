import PortfolioComp from "@/components/portfolio";
import React from "react";
import styles from "./portfolio.module.css";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";

export default async function Portfolios() {
  const list_of_port = await getPortfolio();
  if (!list_of_port) {
    return <div>Portfolio Not Found</div>;
  } else {
    return (
      <div className={styles.project}>
        <section className={styles.intro}>
          <h1 className={styles.pageTitle}>My Portfolio</h1>
        </section>

        <div className={styles.blogContainer}>
          {list_of_port.map((port, index) => (
            <PortfolioComp
              key={index}
              projectName={port.projectName}
              image={port.image}
              imageAlt={port.imageAlt}
              projectDetails={port.projectDetails}
            />
          ))}
        </div>
      </div>
    );
  }
}

async function getPortfolio() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const portfolios = await Portfolio.find().orFail();
    // send a response as the blogs as the message
    return portfolios;
  } catch (err) {
    return null;
  }
}
