import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}></span>
              AetherGraph
            </div>
            <p className={styles.tagline}>Connected knowledge for complex information.</p>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/vishnu2006/AetherGraph-GraphRAG-Engine" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:vishnu@example.com">Contact</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Built independently by Vishnu Pandrangi</p>
        </div>
      </div>
    </footer>
  );
}
