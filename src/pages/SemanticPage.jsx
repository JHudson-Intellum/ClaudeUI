const SECTIONS = [
  {
    title: 'Surface',
    description: 'Background colors for page regions and containers.',
    tokens: [
      { name: 'surface-primary', maps: 'grey-200' },
      { name: 'surface-secondary', maps: 'grey-120' },
      { name: 'surface-tertiary', maps: 'grey-100' },
      { name: 'surface-inverse-primary', maps: 'grey-0' },
      { name: 'surface-inverse-secondary', maps: 'grey-10' },
    ],
  },
  {
    title: 'Border',
    description: 'Stroke colors for dividers and boundaries.',
    tokens: [
      { name: 'border-primary', maps: 'grey-90' },
    ],
  },
  {
    title: 'Card',
    description: 'Semantic roles for card components.',
    tokens: [
      { name: 'card-background', maps: 'surface-primary' },
      { name: 'card-primary-text', maps: 'grey-10' },
      { name: 'card-secondary-text', maps: 'grey-40' },
      { name: 'card-border', maps: 'border-primary' },
    ],
  },
  {
    title: 'Buttons',
    description: '17 tokens across 6 button variants: brand, default, secondary, disabled, border, and ghost.',
    tokens: [
      { name: 'btn-brand-background', maps: 'blue-50' },
      { name: 'btn-brand-hover', maps: 'blue-40' },
      { name: 'btn-brand-text', maps: 'grey-100' },
      { name: 'btn-default-text', maps: 'grey-100' },
      { name: 'btn-default-background', maps: 'grey-20' },
      { name: 'btn-default-hover', maps: 'grey-40' },
      { name: 'btn-secondary-text', maps: 'grey-10' },
      { name: 'btn-secondary-background', maps: 'grey-80' },
      { name: 'btn-secondary-hover', maps: 'grey-70' },
      { name: 'btn-disabled-text', maps: 'grey-60' },
      { name: 'btn-disabled-background', maps: 'grey-90' },
      { name: 'btn-border-text', maps: 'grey-20' },
      { name: 'btn-border-border', maps: 'grey-60' },
      { name: 'btn-border-background', maps: 'white-alpha-001' },
      { name: 'btn-border-hover', maps: 'grey-80' },
      { name: 'btn-ghost-text', maps: 'grey-10' },
      { name: 'btn-ghost-hover', maps: 'grey-90' },
    ],
  },
  {
    title: 'Messaging — Default',
    description: 'Neutral informational banners and alerts.',
    tokens: [
      { name: 'msg-default-background-max', maps: 'grey-10' },
      { name: 'msg-default-foreground-max', maps: 'grey-100' },
      { name: 'msg-default-border-max', maps: 'grey-100' },
      { name: 'msg-default-background-mid', maps: 'grey-90' },
      { name: 'msg-default-foreground-mid', maps: 'grey-10' },
      { name: 'msg-default-border-mid', maps: 'grey-90' },
      { name: 'msg-default-background-min', maps: 'white-alpha-0' },
      { name: 'msg-default-foreground-min', maps: 'grey-10' },
      { name: 'msg-default-border-min', maps: 'grey-90' },
    ],
  },
  {
    title: 'Messaging — Success',
    description: 'Positive confirmation banners and alerts.',
    tokens: [
      { name: 'msg-success-background-max', maps: 'green-30' },
      { name: 'msg-success-foreground-max', maps: 'green-100' },
      { name: 'msg-success-border-max', maps: 'green-30' },
      { name: 'msg-success-background-min', maps: 'green-90' },
      { name: 'msg-success-foreground-min', maps: 'green-30' },
      { name: 'msg-success-border-min', maps: 'green-50' },
    ],
  },
  {
    title: 'Messaging — Destructive',
    description: 'Error and destructive action banners.',
    tokens: [
      { name: 'msg-destructive-background-max', maps: 'red-40' },
      { name: 'msg-destructive-foreground-max', maps: 'red-100' },
      { name: 'msg-destructive-border-max', maps: 'red-40' },
      { name: 'msg-destructive-background-min', maps: 'red-100' },
      { name: 'msg-destructive-foreground-min', maps: 'red-40' },
      { name: 'msg-destructive-border-min', maps: 'red-50' },
    ],
  },
  {
    title: 'Messaging — Alert',
    description: 'Warning banners and caution states.',
    tokens: [
      { name: 'msg-alert-background-max', maps: 'amber-30' },
      { name: 'msg-alert-foreground-max', maps: 'amber-100' },
      { name: 'msg-alert-border-max', maps: 'amber-30' },
      { name: 'msg-alert-background-min', maps: 'amber-100' },
      { name: 'msg-alert-foreground-min', maps: 'amber-20' },
      { name: 'msg-alert-border-min', maps: 'amber-50' },
    ],
  },
  {
    title: 'Messaging — Brand',
    description: 'Branded informational banners.',
    tokens: [
      { name: 'msg-brand-background-max', maps: 'blue-50' },
      { name: 'msg-brand-foreground-max', maps: 'white-alpha-100' },
      { name: 'msg-brand-border-max', maps: 'blue-50' },
      { name: 'msg-brand-background-min', maps: 'white-alpha-0' },
      { name: 'msg-brand-foreground-min', maps: 'blue-50' },
      { name: 'msg-brand-border-min', maps: 'blue-50' },
    ],
  },
]

function Swatch({ token, maps }) {
  const isText = token.includes('-text') || token.includes('-foreground')
  const isBorder = token.includes('-border') && !token.includes('background')

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '6px 0' }}>
      <div style={{
        width: 48,
        height: 48,
        borderRadius: 'var(--rounded-sm)',
        flexShrink: 0,
        background: isBorder || isText ? 'var(--grey-200)' : `var(--${token})`,
        border: isBorder
          ? `3px solid var(--${token})`
          : '1px solid var(--grey-90)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {isText && (
          <span style={{
            color: `var(--${token})`,
            fontWeight: 700,
            fontSize: 14,
          }}>
            Aa
          </span>
        )}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--grey-20)',
        }}>
          --{token}
        </div>
        <div style={{
          fontSize: 11,
          fontFamily: 'monospace',
          color: 'var(--grey-50)',
          marginTop: 1,
        }}>
          {maps}
        </div>
      </div>
    </div>
  )
}

export default function SemanticPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Semantic Colors
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--grey-40)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        Role-based tokens that map primitives to UI purposes.
        In Figma, "brand-neutrals" = Grey and "brand-shades" = Blue.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--grey-50)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        5 categories: Surface, Border, Card, Buttons (6 variants), and
        Messaging (5 types &times; max/mid/min intensity).
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {SECTIONS.map(section => (
          <div key={section.title}>
            <h3 style={{
              fontSize: 18,
              fontWeight: 700,
              color: 'var(--grey-10)',
              marginBottom: 4,
            }}>
              {section.title}
            </h3>
            <p style={{
              fontSize: 13,
              color: 'var(--grey-50)',
              marginBottom: 20,
            }}>
              {section.description}
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '4px 48px',
            }}>
              {section.tokens.map(t => (
                <Swatch key={t.name} token={t.name} maps={t.maps} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
