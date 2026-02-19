import { useState, useEffect } from 'react'
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
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav style={{
        width: 220,
        padding: '32px 16px',
        borderRight: '1px solid var(--nav-border)',
        background: 'var(--nav-bg)',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h1 style={{
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 4,
          color: 'var(--nav-title)',
        }}>
          ID.s Design System
        </h1>
        <p style={{
          fontSize: 12,
          color: 'var(--nav-subtitle)',
          marginBottom: 24,
        }}>
          Token Reference
        </p>

        <button
          onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            borderRadius: 6,
            border: '1px solid var(--nav-border)',
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 500,
            color: 'var(--nav-item)',
            background: 'var(--nav-toggle-bg)',
            marginBottom: 20,
          }}
        >
          <span style={{
            fontFamily: 'Material Symbols Outlined',
            fontSize: 16,
            lineHeight: 1,
          }}>
            {theme === 'light' ? 'dark_mode' : 'light_mode'}
          </span>
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>

        <ul style={{ listStyle: 'none' }}>
          {NAV_ITEMS.map(item => {
            if (item.id === '_divider') {
              return <li key="_divider" style={{
                borderTop: '1px solid var(--nav-border)',
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
                    color: activePage === item.id ? 'var(--nav-active)' : 'var(--nav-item)',
                    background: activePage === item.id ? 'var(--nav-active-bg)' : 'transparent',
                  }}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
      <main style={{
        flex: 1,
        padding: 48,
        overflowY: 'auto',
        background: 'var(--page-bg)',
        color: 'var(--page-text)',
      }}>
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
