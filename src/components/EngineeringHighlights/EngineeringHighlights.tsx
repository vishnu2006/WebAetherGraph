import React from 'react';
import styles from './EngineeringHighlights.module.css';

export default function EngineeringHighlights() {
  return (
    <section id="technology" className={`section ${styles.engineeringSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Engineering & Infrastructure</h2>
          <p>
            AetherGraph is a serious engineering project built with an emphasis on modular architecture, cloud deployment, and scalable data processing. It is deployed across AWS, Render, and Vercel.
          </p>
        </div>

        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>16,294</div>
            <div className={styles.metricLabel}>Lines of Code</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>149</div>
            <div className={styles.metricLabel}>GitHub Commits</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>31</div>
            <div className={styles.metricLabel}>Redeployments</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>15</div>
            <div className={styles.metricLabel}>Days to MVP</div>
          </div>
        </div>

        <div className={styles.highlightsGrid}>
          <div className="glass-panel">
            <h3 className={styles.highlightTitle}>Multi-Cloud Deployment</h3>
            <p>Orchestrated AWS, Render, and Vercel into a secure multi-cloud architecture with isolated networking. Dockerized backend with a dedicated pgvector PostgreSQL container on AWS.</p>
          </div>
          <div className="glass-panel">
            <h3 className={styles.highlightTitle}>HNSW ANN Vector Search</h3>
            <p>Engineered Hierarchical Navigable Small World (HNSW) Approximate Nearest Neighbor search for fast, low-latency semantic retrieval across thousands of pages.</p>
          </div>
          <div className="glass-panel">
            <h3 className={styles.highlightTitle}>Asynchronous FastAPI Backend</h3>
            <p>Deployed a production-ready asynchronous FastAPI backend on Render. Handled async connection pools and kept the system within strict memory limits by offloading inference.</p>
          </div>
          <div className="glass-panel">
            <h3 className={styles.highlightTitle}>Real-time Synchronization</h3>
            <p>Added real-time WebSocket synchronization between the Next.js frontend and the FastAPI backend for live GraphRAG processing updates.</p>
          </div>
        </div>

        <div className={styles.techStack}>
          <h3 className={styles.techTitle}>Technology Stack</h3>
          <div className={styles.pills}>
            <span>Python</span>
            <span>FastAPI</span>
            <span>Next.js</span>
            <span>React</span>
            <span>PostgreSQL</span>
            <span>pgvector</span>
            <span>GraphRAG</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>Render</span>
            <span>WebSockets</span>
          </div>
        </div>
      </div>
    </section>
  );
}
