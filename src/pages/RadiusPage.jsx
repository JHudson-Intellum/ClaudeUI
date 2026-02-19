const RADII = [
  { name: 'none', value: '0px' },
  { name: 'xs', value: '2px', token: 'rounded-xs' },
  { name: 'sm', value: '4px', token: 'rounded-sm' },
  { name: 'md', value: '6px', token: 'rounded-md' },
  { name: 'lg', value: '8px', token: 'rounded-lg' },
  { name: 'radius', value: '10px', token: 'radius', isBase: true },
  { name: 'xl', value: '12px', token: 'rounded-xl' },
  { name: '2xl', value: '16px', token: 'rounded-2xl' },
  { name: '3xl', value: '24px', token: 'rounded-3xl' },
  { name: 'full', value: '9999px', token: 'rounded-full' },
]

export default function RadiusPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Border Radius
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        10 radius tokens from sharp corners to fully round.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
        {RADII.map(r => {
          const token = r.token || `rounded-${r.name}`
          return (
            <div key={r.name} style={{ textAlign: 'center', width: 120 }}>
              <div style={{
                width: 96,
                height: 96,
                margin: '0 auto',
                borderRadius: `var(--${token})`,
                background: 'var(--grey-10)',
              }} />
              <div style={{
                fontSize: 13,
                fontWeight: 600,
                marginTop: 10,
                color: 'var(--page-text)',
              }}>
                {r.name}
              </div>
              <div style={{
                fontSize: 10,
                fontFamily: 'monospace',
                color: 'var(--page-muted)',
                marginTop: 2,
              }}>
                --{token}
              </div>
              <div style={{
                fontSize: 11,
                color: 'var(--page-subtle)',
                marginTop: 2,
              }}>
                {r.value}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
