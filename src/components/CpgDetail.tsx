import React, { useState } from 'react';
import { CpgDocument, CpgBlock, CpgListItem } from '../types';

interface CpgDetailProps {
  doc: CpgDocument;
}

const CpgDetail: React.FC<CpgDetailProps> = ({ doc }) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggle = (i: number) => setOpenSection(openSection === i ? null : i);

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
          <div key={i} className="cpg-section">
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
                  <td key={j}>{row[h] ?? ''}</td>
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
