import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className="glow-blob primary"></div>
      <div className={`container ${styles.container}`}>
        <div className={`animate-fade-in ${styles.badge}`}>
          <span className={styles.badgePulse}></span>
          AetherGraph Knowledge Engine v1.0
        </div>
        <h1 className={`animate-fade-in delay-100 ${styles.title}`}>
          Turn fragmented knowledge into a <br className={styles.hideMobile} />
          <span className="text-gradient-accent">connected intelligence layer.</span>
        </h1>
        <p className={`animate-fade-in delay-200 ${styles.subtitle}`}>
          A cloud-based GraphRAG knowledge engine that combines knowledge graphs, vector retrieval, and document intelligence to connect information scattered across educational documents.
        </p>
        <div className={`animate-fade-in delay-300 ${styles.actions}`}>
          <a href="#architecture" className="btn btn-primary">Explore the Architecture</a>
          <a href="https://github.com/vishnu2006/AetherGraph-GraphRAG-Engine" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
