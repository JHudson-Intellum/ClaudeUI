const ELEVATIONS = [
  { name: '2xs', description: 'Subtle / structural' },
  { name: 'xs', description: 'Subtle / structural' },
  { name: 'sm', description: 'Cards, inputs' },
  { name: 'md', description: 'Dropdowns, popovers' },
  { name: 'lg', description: 'Modals, dialogs' },
  { name: 'xl', description: 'Toasts, notifications' },
  { name: '2xl', description: 'Full overlays' },
]

export default function ElevationPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Elevation
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--grey-40)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        7 shadow levels. 2xs and xs are transparent structural placeholders.
        sm through 2xl use black at 10% opacity with layered shadows.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {ELEVATIONS.map(e => (
          <div key={e.name} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ width: 100, flexShrink: 0 }}>
              <div style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--grey-20)',
              }}>
                {e.name}
              </div>
              <div style={{
                fontSize: 10,
                fontFamily: 'monospace',
                color: 'var(--grey-50)',
                marginTop: 2,
              }}>
                --elevation-{e.name}
              </div>
              <div style={{
                fontSize: 11,
                color: 'var(--grey-60)',
                marginTop: 2,
              }}>
                {e.description}
              </div>
            </div>
            <div style={{
              width: 240,
              height: 80,
              borderRadius: 'var(--rounded-md)',
              background: 'var(--grey-200)',
              boxShadow: `var(--elevation-${e.name})`,
              border: '1px solid var(--grey-90)',
            }} />
          </div>
        ))}
      </div>
    </div>
  )
}
