import React from 'react';
import styles from './ArchitectureSection.module.css';

export default function ArchitectureSection() {
  return (
    <section id="architecture" className={`section ${styles.architectureSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Vector + Graph Architecture</h2>
          <p>
            AetherGraph doesn't just search text; it traverses relationships. By combining HNSW ANN vector search for semantic retrieval with a PostgreSQL-backed knowledge graph, it grounds answers in actual structural connections.
          </p>
        </div>

        <div className="glass-panel">
          <div className={styles.diagram}>
            <svg viewBox="0 0 800 400" className={styles.svg}>
              <defs>
                <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6" />
                </marker>
              </defs>
              
              {/* Nodes */}
              <g className={styles.nodeGroup}>
                <rect x="50" y="150" width="120" height="60" rx="8" className={styles.node} />
                <text x="110" y="185" textAnchor="middle" className={styles.nodeText}>Documents</text>
              </g>

              <g className={styles.nodeGroup}>
                <rect x="250" y="50" width="140" height="60" rx="8" className={styles.node} />
                <text x="320" y="85" textAnchor="middle" className={styles.nodeText}>Vector Store (pgvector)</text>
              </g>

              <g className={styles.nodeGroup}>
                <rect x="250" y="250" width="140" height="60" rx="8" className={styles.node} />
                <text x="320" y="285" textAnchor="middle" className={styles.nodeText}>Knowledge Graph</text>
              </g>

              <g className={styles.nodeGroup}>
                <rect x="480" y="150" width="120" height="60" rx="8" className={styles.nodeHighlight} />
                <text x="540" y="185" textAnchor="middle" className={styles.nodeText}>GraphRAG Engine</text>
              </g>

              <g className={styles.nodeGroup}>
                <rect x="650" y="150" width="120" height="60" rx="8" className={styles.node} />
                <text x="710" y="185" textAnchor="middle" className={styles.nodeText}>Connected Answers</text>
              </g>

              {/* Edges */}
              <path d="M 170 170 Q 210 100 250 80" className={styles.edge} markerEnd="url(#arrow)" />
              <path d="M 170 190 Q 210 260 250 280" className={styles.edge} markerEnd="url(#arrow)" />
              
              <path d="M 390 80 Q 430 100 480 170" className={styles.edge} markerEnd="url(#arrow)" />
              <path d="M 390 280 Q 430 260 480 190" className={styles.edge} markerEnd="url(#arrow)" />
              
              <path d="M 600 180 L 650 180" className={styles.edge} markerEnd="url(#arrow)" />

              {/* Edge Labels */}
              <text x="180" y="110" className={styles.edgeLabel}>Embeddings</text>
              <text x="180" y="260" className={styles.edgeLabel}>Entity Extraction</text>
              <text x="430" y="110" className={styles.edgeLabel}>Top-K</text>
              <text x="430" y="260" className={styles.edgeLabel}>Traversal</text>

            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
