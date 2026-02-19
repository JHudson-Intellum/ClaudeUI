import { useState } from 'react'
import ColorsPage from './pages/ColorsPage.jsx'
import TypographyPage from './pages/TypographyPage.jsx'
import SpacingPage from './pages/SpacingPage.jsx'
import RadiusPage from './pages/RadiusPage.jsx'
import ElevationPage from './pages/ElevationPage.jsx'
import BorderWidthPage from './pages/BorderWidthPage.jsx'
import BreakpointsPage from './pages/BreakpointsPage.jsx'
import SemanticPage from './pages/SemanticPage.jsx'
import BadgePage from './pages/BadgePage.jsx'

const NAV_ITEMS = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'radius', label: 'Border Radius' },
  { id: 'elevation', label: 'Elevation' },
  { id: 'border-width', label: 'Border Width' },
  { id: 'breakpoints', label: 'Breakpoints' },
  { id: 'semantic', label: 'Semantic Colors' },
  { id: '_divider' },
  { id: 'badge', label: 'Badge' },
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
          {NAV_ITEMS.map(item => {
            if (item.id === '_divider') {
              return <li key="_divider" style={{
                borderTop: '1px solid var(--grey-80)',
                margin: '12px 0',
              }} />
            }
            return (
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
            )
          })}
        </ul>
      </nav>
      <main style={{ flex: 1, padding: 48, overflowY: 'auto' }}>
        {activePage === 'colors' && <ColorsPage />}
        {activePage === 'typography' && <TypographyPage />}
        {activePage === 'spacing' && <SpacingPage />}
        {activePage === 'radius' && <RadiusPage />}
        {activePage === 'elevation' && <ElevationPage />}
        {activePage === 'border-width' && <BorderWidthPage />}
        {activePage === 'breakpoints' && <BreakpointsPage />}
        {activePage === 'semantic' && <SemanticPage />}
        {activePage === 'badge' && <BadgePage />}
      </main>
    </div>
  )
}
