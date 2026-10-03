import React, { useState, useRef, useEffect } from 'react';
import { CpgDocument, CpgBlock, CpgListItem } from '../types';

interface CpgDetailProps {
  doc: CpgDocument;
  containerRef: React.RefObject<HTMLDivElement>;
  // When set, open this section index and scroll to it
  scrollToIndex?: number | null;
  onScrollHandled?: () => void;
}

const CpgDetail: React.FC<CpgDetailProps> = ({
  doc,
  containerRef,
  scrollToIndex,
  onScrollHandled,
}) => {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track a pending scroll target separately from openSection so we can
  // scroll AFTER the newly-opened section body has been painted.
  const [pendingScroll, setPendingScroll] = useState<number | null>(null);

  // Phase 1: when parent requests a section, open it and queue a scroll.
  useEffect(() => {
    if (scrollToIndex == null) return;
    setOpenSection(scrollToIndex);
    setPendingScroll(scrollToIndex);
    onScrollHandled?.();
  }, [scrollToIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Phase 2: after the section body is in the DOM, perform the scroll.
  useEffect(() => {
    if (pendingScroll == null) return;
    const container = containerRef.current;
    const section = sectionRefs.current[pendingScroll];
    if (container && section) {
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const offset = sectionRect.top - containerRect.top + container.scrollTop;
      container.scrollTo({ top: offset, behavior: 'smooth' });
    }
    setPendingScroll(null);
  }, [pendingScroll]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (i: number) => {
    setOpenSection(openSection === i ? null : i);
  };

  return (
    <div className="cpg-detail">
      <div className="cpg-header">
        <h2 className="cpg-title">{doc.condition}</h2>
        <div className="cpg-meta">
          <span>📄 {doc.source}</span>
          <span>🗓 {doc.reviewDate}</span>
          {doc.advisors && <span>👨‍⚕️ {doc.advisors}</span>}
        </div>
        <div className="cpg-badge">NUP CPG</div>
      </div>

      <div className="cpg-sections">
        {doc.sections.map((section, i) => (
          <div
            key={i}
            className="cpg-section"
            ref={(el) => { sectionRefs.current[i] = el; }}
          >
            <button
              className={`cpg-section-heading ${openSection === i ? 'open' : ''}`}
              onClick={() => toggle(i)}
            >
              <span>{section.heading}</span>
              <span className="cpg-chevron">{openSection === i ? '▲' : '▼'}</span>
            </button>

            {openSection === i && (
              <div className="cpg-section-body">
                {section.blocks.map((block, j) => (
                  <RenderBlock key={j} block={block} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const RenderBlock: React.FC<{ block: CpgBlock }> = ({ block }) => {
  if (block.type === 'text') {
    return <p className="cpg-text">{block.content}</p>;
  }

  if (block.type === 'list') {
    return (
      <ul className="cpg-list">
        {block.items.map((item, i) => (
          <RenderListItem key={i} item={item} />
        ))}
      </ul>
    );
  }

  if (block.type === 'table') {
    return (
      <div className="cpg-table-wrap">
        <table className="cpg-table">
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {block.headers.map((h, j) => (
                  <td key={j}>
                    {'cells' in row ? (row.cells[j] ?? '') : ((row as Record<string, string>)[h] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

const RenderListItem: React.FC<{ item: CpgListItem; depth?: number }> = ({
  item,
  depth = 0,
}) => (
  <li className={`cpg-list-item depth-${depth}`}>
    <span>{item.text}</span>
    {item.children && item.children.length > 0 && (
      <ul className="cpg-list">
        {item.children.map((child, i) => (
          <RenderListItem key={i} item={child} depth={depth + 1} />
        ))}
      </ul>
    )}
  </li>
);

export { CpgDetail };
