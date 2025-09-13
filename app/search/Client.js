'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Client({ index = [] }) {
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return index;
    return index.filter(i =>
      (i.title + ' ' + i.href).toLowerCase().includes(needle)
    );
  }, [q, index]);

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Search</h1>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search pages…"
        style={{
          width: '100%',
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          padding: '10px 12px',
        }}
      />
      <ul style={{ marginTop: 20, listStyle: 'none', padding: 0 }}>
        {results.map((r) => (
          <li key={r.href} style={{ marginBottom: 10 }}>
            <Link href={r.href} style={{ color: '#2563eb', textDecoration: 'underline' }}>
              {r.title}
            </Link>
          </li>
        ))}
        {results.length === 0 && (
          <li style={{ color: '#6b7280' }}>No results.</li>
        )}
      </ul>
      <Footer />
    </div>
  );
}
