import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.topBanner}>
        <span>Built independently by <span className={styles.highlight}>Vishnu Pandrangi</span></span>
      </div>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}></span>
            AetherGraph
          </div>
          <div className={styles.links}>
            <a href="#product">Product</a>
            <a href="#architecture">Architecture</a>
            <a href="#technology">Technology</a>
            <a href="#about">About</a>
          </div>
          <div className={styles.actions}>
            <a href="https://github.com/vishnu2006/AetherGraph-GraphRAG-Engine" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View on GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
