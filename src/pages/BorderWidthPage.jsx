const WIDTHS = [
  { name: 'xs', value: '1px', description: 'Hairline / subtle dividers' },
  { name: 'sm', value: '2px', description: 'Default borders' },
  { name: 'md', value: '3px', description: 'Emphasized borders' },
  { name: 'lg', value: '4px', description: 'Heavy / active indicators' },
]

export default function BorderWidthPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Border Width
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        4 stroke-width tokens from hairline to heavy.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {WIDTHS.map(w => (
          <div key={w.name} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ width: 120, flexShrink: 0 }}>
              <div style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--page-text)',
              }}>
                {w.name}
              </div>
              <div style={{
                fontSize: 10,
                fontFamily: 'monospace',
                color: 'var(--page-muted)',
                marginTop: 2,
              }}>
                --border-{w.name}
              </div>
              <div style={{
                fontSize: 11,
                color: 'var(--page-subtle)',
                marginTop: 2,
              }}>
                {w.value}
              </div>
            </div>
            <div style={{
              width: 200,
              borderBottom: `var(--border-${w.name}) solid var(--grey-10)`,
            }} />
          </div>
        ))}
      </div>
    </div>
  )
}
