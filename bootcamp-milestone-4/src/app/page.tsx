import styles from "./home.module.css";

// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
    <div className="about">
      <div className={styles.aboutText}>
        <p>
          Hi! My name is Emi Dinh, I am from Sacramento, California. I enjoy
          rock climbing, photography, and videography in my freetime.
        </p>
        <br />

        <p>
          I am passionate about exploring computer science and cybersecurity,
          dedicated to <strong>lifelong</strong> learning and empowering others.
          My mission is to educate and inspire individuals to navigate the
          digital world confidently and safely, fostering a secure future where
          technology drives positive change.
        </p>
      </div>
    </div>
  );
}
