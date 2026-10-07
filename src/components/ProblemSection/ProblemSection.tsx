import React from 'react';
import styles from './ProblemSection.module.css';

export default function ProblemSection() {
  return (
    <section id="problem" className={`section ${styles.problemSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Why conventional search fails</h2>
          <p>Traditional document search treats educational materials as isolated chunks of text. It loses the most important part of learning: the connections between concepts.</p>
        </div>

        <div className={styles.grid}>
          <div className="glass-panel">
            <div className={styles.icon}>✕</div>
            <h3 className={styles.cardTitle}>Disconnected Documents</h3>
            <p>Information is scattered across PDFs, lecture notes, and assignments without cross-referencing capabilities.</p>
          </div>
          <div className="glass-panel">
            <div className={styles.icon}>✕</div>
            <h3 className={styles.cardTitle}>Fragmented Concepts</h3>
            <p>Keyword search retrieves isolated sentences, missing the broader context necessary for deep understanding.</p>
          </div>
          <div className="glass-panel">
            <div className={styles.icon}>✕</div>
            <h3 className={styles.cardTitle}>Hidden Relationships</h3>
            <p>Unable to connect ideas across different lectures or pinpoint how foundational concepts map to advanced topics.</p>
          </div>
          <div className="glass-panel">
            <div className={styles.icon}>✕</div>
            <h3 className={styles.cardTitle}>Messy Data</h3>
            <p>Struggles with unstructured whiteboard screenshots, handwritten notes, and informal study material.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
