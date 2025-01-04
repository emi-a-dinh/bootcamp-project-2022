import React from "react";
import styles from "./resume.module.css";
// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
    <div>
      <div className={styles.resume}>
        <section>
          <hr />
          <h1 className={styles.sectionTitle}>Education</h1>
          <div className={styles.entry}>
            <h3 className={styles.entry}>
              Bachelor of Science in Computer Science
            </h3>
            <p className={styles.entry}>
              California Polytechnic State University, San Luis Obispo |
              Expected Graduation June 2026 | GPA: 3.619
            </p>
            <p className={styles.entry}></p>
          </div>
        </section>
        <section>
          <hr />
          <h1 className={styles.sectionTitle}>Experience</h1>
          <div className={styles.entry}>
            <h3 className={styles.entry}>Frontend Developer</h3>
            <p className={styles.entry}>
              AI-Search and Rescue - San Luis Obispo | May 2024 - Present
            </p>
            <p className={styles.entry}></p>
            <ul>
              <li>
                Created custom React.js components to display real-time data
                custom to user’s security level retrieved from Firebase
                databases, ensuring a seamless user experience and efficient
                data visualization.
              </li>
              <li>
                Leveraged Firebase as the backend infrastructure to store,
                manage, and synchronize data for web applications, ensuring
                reliability, scalability, and real-time updates.
              </li>
              <li>
                Led, designed, and executed usability testing strategies,
                including test plan development, participant recruitment, test
                moderation, and data analysis driving actionable feedback that
                improved user experience
              </li>
            </ul>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entry}>Game Developer</h3>
            <p className={styles.entry}>
              Cybersecurity Institution- San Luis Obispo | March 2023 – November
              2023
            </p>
            <p className={styles.entry}></p>
            <ul>
              <li>
                Developed and implemented challenging cybersecurity programs and
                web applications, resulting in an engaging competition
                experience for participants and enhancing the overall UI/UX.
              </li>
              <li>
                Collaborated closely with cross-functional teams, including
                Digital Forensics and Unity Development, to ensure seamless
                integration of challenges, flag input system, and story content
                into the web application.
              </li>
              <li>
                Leveraged expertise in cybersecurity, familiarity with Capture
                the Flag (CTF) gameplay, and proficiency in languages to drive
                the development and maintenance of digital forensics evidence
                and challenges.
              </li>
            </ul>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entry}>
              Developer for Microcontroller Emulation
            </h3>
            <p className={styles.entry}>
              Naval Surface Warfare Crane Center | June 2023 – August 2023
            </p>
            <p className={styles.entry}></p>
            <ul>
              <li>
                Conducted extensive research on QEMU, an open-source emulator,
                increasing understanding and proficiency in emulating MIPS and
                AVR microcontrollers using Ghidra and GDB to debug and cross
                verify
              </li>
              <li>
                Actively collaborated with team members to discuss and share
                insights on QEMU, contributing to a deeper understanding of
                emulation techniques and fostering knowledge exchange within the
                team.
              </li>
              <li>
                Compiled extensive research findings into a comprehensive
                report, facilitating future investigations and demonstrating
                encountered challenges and faults in emulating diverse
                architectural types.
              </li>
            </ul>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entry}>Assistant Developer</h3>
            <p className={styles.entry}>
              Granite Horizon | January 2021 – August 2022
            </p>
            <p className={styles.entry}></p>
            <ul>
              <li>
                Successfully developed and custom configuration of Enterprise
                Content Management using Java, JavaScript, and REST API which
                can be used to increase enterprise system efficiencies and
                manage data by 40%
              </li>
              <li>
                Collaborated with team members to ensure the custom modules were
                built to meet client requirements and prevent any errors from
                occurring in production.
              </li>
              <li>
                Obtained 2 certification demonstrating mastery in REST API
                principals, Polymer, Nuxeo Elements, Nuxeo Platform principles,
                and Studio Modelers
              </li>
            </ul>
          </div>
        </section>
        <section>
          <hr />
          <h1 className={styles.sectionTitle}>Skills</h1>
          <div className={styles.skillcontainer}>
            <div className={styles.skillcolumn}>
              <h2>Language</h2>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>JavaScript</li>
                <li>RISC-V</li>
                <li>System Verilog</li>
                <li>C++</li>
                <li>MySQL</li>
                <li>HTML/CSS</li>
                <li>Bash</li>
              </ul>
            </div>
            <div className={styles.skillcolumn}>
              <h2>Framework</h2>
              <ul>
                <li>React</li>
                <li>Flask</li>
                <li>Express</li>
                <li>JavaFX</li>
              </ul>
            </div>
            <div className={styles.skillcolumn}>
              <h2>Developer Tools</h2>
              <ul>
                <li>MongoDB</li>
                <li>Pandas</li>
                <li>NumPy</li>
                <li>QEMU</li>
                <li>Ghidra</li>
                <li>GDB</li>
                <li>Git</li>
                <li>Arduino</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <hr />
          <h1 className={styles.sectionTitle}>Projects</h1>
          <div className={styles.entry}>
            <h3 className={styles.entry}>
              Structure Learning in Search and Rescue
            </h3>
            <p className={styles.entry}>AI-SAR | June 2024 – September 2024</p>
            <ul>
              <li>
                Applied structure learning techniques, including the Hill Climb
                algorithm and PC algorithm, to optimize Bayesian network
                structures tailored for real-time search and rescue scenarios.
              </li>
              <li>
                Utilized Pandas and NumPy to clean and preprocess diverse
                datasets, enhancing data quality for effective analysis.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h1 className={styles.sectionTitle}>Coursework</h1>
          <div className={styles.skillcontainer}>
            <div className={styles.skillcolumn}>
              <ul>
                <li>Distributed Systems</li>
                <li>Programming Languages</li>
                <li>Intro to Database Systems</li>
                <li>Intro to Software Engineering</li>
                <li>Interactive Entertainment Engineering</li>
                <li>Data Structures</li>
                <li>Project-Based Object Orientation Program and Design</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
