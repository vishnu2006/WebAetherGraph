import React from 'react';
import styles from './HowItWorksSection.module.css';

export default function HowItWorksSection() {
  return (
    <section id="product" className={`section ${styles.howItWorksSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>The Knowledge Pipeline</h2>
          <p>From fragmented files to a connected intelligence layer in seconds.</p>
        </div>

        <div className={styles.pipeline}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.stepTitle}>Multimodal Ingestion</h3>
            <p>Upload PDFs, lecture notes, PowerPoints, and whiteboard screenshots.</p>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.stepTitle}>Semantic Extraction</h3>
            <p>Entity and relationship detection from raw text and OCR data.</p>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.stepTitle}>Knowledge Graph</h3>
            <p>Construct a living web of connected concepts alongside vector retrieval.</p>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>04</div>
            <h3 className={styles.stepTitle}>GraphRAG Reasoning</h3>
            <p>Deliver source-grounded answers by traversing the graph and retrieving relevant vectors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
