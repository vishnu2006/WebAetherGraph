import React from 'react';
import styles from './DocumentIntelligence.module.css';

export default function DocumentIntelligence() {
  return (
    <section className={`section ${styles.docSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2>Built for messy educational data</h2>
          <p>
            Real-world study materials aren't clean text files. AetherGraph is designed to handle the reality of student data, parsing through noisy inputs to extract meaningful connections.
          </p>
          <ul className={styles.list}>
            <li>
              <span className={styles.check}>✓</span>
              <strong>PDFs & Lecture Notes:</strong> Extracts structured text and metadata from extensive academic documents.
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <strong>PowerPoints:</strong> Parses slide content to maintain the sequence of concepts.
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <strong>Whiteboard Screenshots:</strong> Processes images of handwritten notes and diagrams (best-effort extraction).
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <strong>Assignments & Syllabi:</strong> Automatically extracts deadlines and topics into an interactive format.
            </li>
          </ul>
        </div>
        <div className={styles.visual}>
          <div className={styles.cardStack}>
            <div className={`${styles.card} ${styles.card3}`}>.jpg</div>
            <div className={`${styles.card} ${styles.card2}`}>.pptx</div>
            <div className={`${styles.card} ${styles.card1}`}>.pdf</div>
          </div>
        </div>
      </div>
    </section>
  );
}
