const TSHIRT_SIZES = [
  { name: '3xs', value: '2px' },
  { name: '2xs', value: '4px' },
  { name: 'xs', value: '8px' },
  { name: 'sm', value: '12px' },
  { name: 'md', value: '16px' },
  { name: 'lg', value: '20px' },
  { name: 'xl', value: '24px' },
  { name: '2xl', value: '32px' },
  { name: '3xl', value: '40px' },
  { name: '4xl', value: '48px' },
  { name: '5xl', value: '64px' },
]

export default function SpacingPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Spacing
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        T-shirt sized spacing tokens built on a 4px base unit. A full raw
        numeric scale also exists in the CSS for internal use.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {TSHIRT_SIZES.map(s => (
          <div key={s.name} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            <div style={{
              width: 100,
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--page-text)',
            }}>
              {s.name}
            </div>
            <div style={{
              width: `var(--spacing-${s.name})`,
              height: 24,
              borderRadius: 4,
              background: 'var(--blue-50)',
              flexShrink: 0,
              minWidth: 2,
            }} />
            <div style={{
              fontSize: 12,
              color: 'var(--page-muted)',
              fontFamily: 'monospace',
            }}>
              --spacing-{s.name}
            </div>
            <div style={{
              fontSize: 12,
              color: 'var(--page-subtle)',
            }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
