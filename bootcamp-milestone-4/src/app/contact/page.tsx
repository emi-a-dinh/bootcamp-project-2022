import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <p>Contact me here!</p>
      <div className={styles.formContainer}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <br />
        <br />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <br />
        <label htmlFor="message">Message: </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}
