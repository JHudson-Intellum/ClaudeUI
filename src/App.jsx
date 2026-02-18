import { useState } from 'react'
import ColorsPage from './pages/ColorsPage.jsx'

const NAV_ITEMS = [
  { id: 'colors', label: 'Colors' },
  // Future pages:
  // { id: 'typography', label: 'Typography' },
  // { id: 'elevation', label: 'Elevation' },
  // { id: 'spacing', label: 'Spacing & Radius' },
  // { id: 'semantic', label: 'Semantic Tokens' },
]

export default function App() {
  const [activePage, setActivePage] = useState('colors')

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav style={{
        width: 220,
        padding: '32px 16px',
        borderRight: '1px solid var(--grey-80)',
        background: 'var(--grey-200)',
        flexShrink: 0,
      }}>
        <h1 style={{
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 4,
          color: 'var(--grey-10)',
        }}>
          ID.s Design System
        </h1>
        <p style={{
          fontSize: 12,
          color: 'var(--grey-50)',
          marginBottom: 32,
        }}>
          Token Reference
        </p>
        <ul style={{ listStyle: 'none' }}>
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActivePage(item.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderRadius: 6,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: activePage === item.id ? 600 : 400,
                  color: activePage === item.id ? 'var(--blue-50)' : 'var(--grey-30)',
                  background: activePage === item.id ? 'var(--blue-100)' : 'transparent',
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ flex: 1, padding: 48, overflowY: 'auto' }}>
        {activePage === 'colors' && <ColorsPage />}
      </main>
    </div>
  )
}
