const TSHIRT_SIZES = [
  { name: '4xs', value: '1px', rem: '.063rem' },
  { name: '3xs', value: '2px', rem: '.125rem' },
  { name: '2xs-border', value: '3px', rem: '.188rem' },
  { name: '2xs', value: '4px', rem: '.25rem' },
  { name: 'xs-border', value: '7px', rem: '.438rem' },
  { name: 'xs', value: '8px', rem: '.5rem' },
  { name: 'sm-border', value: '11px', rem: '.688rem' },
  { name: 'sm', value: '12px', rem: '.75rem' },
  { name: 'md-border', value: '15px', rem: '.938rem' },
  { name: 'md', value: '16px', rem: '1rem' },
  { name: 'lg-border', value: '19px', rem: '1.188rem' },
  { name: 'lg', value: '20px', rem: '1.25rem' },
  { name: 'xl-border', value: '23px', rem: '1.438rem' },
  { name: 'xl', value: '24px', rem: '1.5rem' },
  { name: '2xl', value: '32px', rem: '2rem' },
  { name: '3xl', value: '36px', rem: '2.25rem' },
  { name: '4xl', value: '40px', rem: '2.5rem' },
  { name: '5xl', value: '44px', rem: '2.75rem' },
  { name: '6xl', value: '48px', rem: '3rem' },
  { name: '7xl', value: '64px', rem: '4rem' },
  { name: '8xl', value: '96px', rem: '6rem' },
]

export default function SizingPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Sizing
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        T-shirt sized tokens with border variants, plus a full raw numeric
        scale. Base unit: 4px.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--page-muted)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Border variants subtract 1px for optical alignment inside bordered
        elements (e.g. xs-border = xs &minus; 1px).
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        T-shirt Scale
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {TSHIRT_SIZES.map(s => (
          <div key={s.name} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            <div style={{
              width: 120,
              flexShrink: 0,
            }}>
              <div style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--page-text)',
              }}>
                {s.name}
              </div>
              <div style={{
                fontSize: 10,
                fontFamily: 'monospace',
                color: 'var(--page-muted)',
                marginTop: 2,
              }}>
                --sizing-{s.name}
              </div>
            </div>
            <div style={{
              width: `var(--sizing-${s.name})`,
              height: 24,
              borderRadius: 4,
              background: s.name.includes('border')
                ? 'var(--amber-50)'
                : 'var(--blue-50)',
              flexShrink: 0,
              minWidth: 1,
            }} />
            <div style={{
              fontSize: 12,
              color: 'var(--page-subtle)',
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
            }}>
              {s.value} &middot; {s.rem}
            </div>
          </div>
        ))}
      </div>

      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
        marginTop: 56,
      }}>
        Raw Scale
      </h3>
      <p style={{
        fontSize: 12,
        color: 'var(--page-muted)',
        marginBottom: 24,
        maxWidth: 600,
      }}>
        Numeric tokens (base &times; 4px). Use t-shirt sizes when possible;
        raw values are for precise control.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '8px 32px',
      }}>
        {[
          '0', '0_25', '0_5', '0_75', '1', '1_25', '1_5', '1_75',
          '2', '2_5', '3', '3_5', '3_75', '4', '4_75', '5',
          '5_75', '6', '7', '8', '9', '10', '11', '12',
          '14', '16', '20', '24', '28', '32', '36', '40',
          '44', '48', '52', '56', '60', '64', '72', '80', '96',
        ].map(name => {
          const label = name.replace('_', '.')
          const px = Math.round(parseFloat(label) * 4)
          return (
            <div key={name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '4px 0',
            }}>
              <div style={{
                width: 40,
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--page-text)',
                textAlign: 'right',
                flexShrink: 0,
              }}>
                {label}
              </div>
              <div style={{
                width: Math.max(px, 1),
                height: 16,
                borderRadius: 2,
                background: 'var(--blue-70)',
                flexShrink: 0,
              }} />
              <div style={{
                fontSize: 10,
                fontFamily: 'monospace',
                color: 'var(--page-muted)',
              }}>
                {px}px
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
