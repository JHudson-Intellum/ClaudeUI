const BREAKPOINTS = [
  { name: 'sm', range: '0 – 767px', min: 0, label: 'Mobile' },
  { name: 'md', range: '768 – 991px', min: 768, label: 'Tablet' },
  { name: 'lg', range: '992 – 1279px', min: 992, label: 'Desktop' },
  { name: 'xl', range: '1280px +', min: 1280, label: 'Wide' },
]

export default function BreakpointsPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Breakpoints
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        4 responsive breakpoints. Mobile-first — sm is the default,
        use min-width media queries to target larger screens.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--page-muted)',
        marginBottom: 48,
        maxWidth: 600,
        fontFamily: 'monospace',
      }}>
        Note: CSS custom properties cannot be used inside @media queries.
        Use the raw pixel values directly.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {BREAKPOINTS.map(bp => (
          <div key={bp.name} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ width: 140, flexShrink: 0 }}>
              <div style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--page-text)',
              }}>
                {bp.name}
                <span style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: 'var(--page-muted)',
                  marginLeft: 8,
                }}>
                  {bp.label}
                </span>
              </div>
              <div style={{
                fontSize: 10,
                fontFamily: 'monospace',
                color: 'var(--page-muted)',
                marginTop: 2,
              }}>
                --breakpoint-{bp.name}
              </div>
              <div style={{
                fontSize: 11,
                color: 'var(--page-subtle)',
                marginTop: 2,
              }}>
                {bp.range}
              </div>
            </div>
            <div style={{ flex: 1, position: 'relative', height: 32 }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: `${Math.min((bp.min / 1280) * 100, 100)}%`,
                borderRight: '2px solid var(--blue-50)',
              }} />
              <div style={{
                position: 'absolute',
                left: `${Math.min((bp.min / 1280) * 100, 100)}%`,
                top: 0,
                height: '100%',
                right: 0,
                background: 'var(--blue-90)',
                borderRadius: 'var(--rounded-xs)',
              }} />
              {bp.min > 0 && (
                <div style={{
                  position: 'absolute',
                  left: `${(bp.min / 1280) * 100}%`,
                  top: -18,
                  fontSize: 10,
                  fontFamily: 'monospace',
                  color: 'var(--page-muted)',
                  transform: 'translateX(-50%)',
                }}>
                  {bp.min}px
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 48,
        padding: 24,
        background: 'var(--code-bg)',
        borderRadius: 'var(--rounded-md)',
        border: '1px solid var(--swatch-border)',
      }}>
        <div style={{
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--page-text)',
          marginBottom: 12,
        }}>
          Usage
        </div>
        <pre style={{
          fontSize: 12,
          fontFamily: 'var(--font-mono)',
          color: 'var(--page-text)',
          lineHeight: 1.6,
          margin: 0,
        }}>{`/* Mobile-first: no query needed for sm */

@media (min-width: 768px)  { /* md — Tablet */ }
@media (min-width: 992px)  { /* lg — Desktop */ }
@media (min-width: 1280px) { /* xl — Wide */ }`}</pre>
      </div>
    </div>
  )
}
