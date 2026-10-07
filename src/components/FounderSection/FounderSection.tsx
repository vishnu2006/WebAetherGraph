import React from 'react';
import styles from './FounderSection.module.css';

export default function FounderSection() {
  return (
    <section id="about" className={`section ${styles.founderSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.avatar}>VP</div>
          <h2>The Project</h2>
          <p>
            AetherGraph is built independently by a student engineer exploring practical AI infrastructure and knowledge systems. It was designed to push the boundaries of standard web apps, turning fragmented data into a living web of connected concepts that students can actually explore and learn from.
          </p>
          <p className={styles.status}>
            <span className={styles.statusDot}></span>
            Early-stage engineering project under active development.
          </p>
        </div>
      </div>
    </section>
  );
}
