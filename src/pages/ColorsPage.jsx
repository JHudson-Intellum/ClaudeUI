const PALETTES = [
  {
    name: 'Grey',
    steps: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100, 150, 200],
  },
  {
    name: 'Blue',
    steps: [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100, 150],
  },
  {
    name: 'Red',
    steps: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
  {
    name: 'Green',
    steps: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
  {
    name: 'Amber',
    steps: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
]

const AI_GRADIENTS = [
  { name: 'AI Gradient', token: '--ai-gradient' },
  { name: 'AI Gradient 5%', token: '--ai-gradient-5' },
  { name: 'AI Gradient 10%', token: '--ai-gradient-10' },
  { name: 'AI Gradient 20%', token: '--ai-gradient-20' },
]

function Swatch({ token, label, wide }) {
  const varRef = `var(${token})`
  const isLight = label >= 80 || label >= 150
  return (
    <div style={{
      width: wide ? 160 : 72,
      textAlign: 'center',
    }}>
      <div style={{
        width: '100%',
        height: 56,
        borderRadius: 8,
        background: varRef,
        border: '1px solid var(--grey-80)',
      }} />
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        marginTop: 6,
        color: 'var(--grey-30)',
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 10,
        color: 'var(--grey-50)',
        fontFamily: 'monospace',
      }}>
        {token}
      </div>
    </div>
  )
}

function GradientSwatch({ name, token }) {
  return (
    <div style={{ width: 160, textAlign: 'center' }}>
      <div style={{
        width: '100%',
        height: 56,
        borderRadius: 8,
        background: `var(${token})`,
        border: '1px solid var(--grey-80)',
      }} />
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        marginTop: 6,
        color: 'var(--grey-30)',
      }}>
        {name}
      </div>
      <div style={{
        fontSize: 10,
        color: 'var(--grey-50)',
        fontFamily: 'monospace',
      }}>
        {token}
      </div>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <div>
      <h2 style={{
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 8,
      }}>
        Color Primitives
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--grey-40)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Raw palette values from the Figma token set. These primitives serve as
        the foundation — semantic tokens will reference them for light and dark
        mode mappings.
      </p>

      {PALETTES.map(palette => (
        <section key={palette.name} style={{ marginBottom: 48 }}>
          <h3 style={{
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 16,
            color: 'var(--grey-20)',
          }}>
            {palette.name}
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            {palette.steps.map(step => (
              <Swatch
                key={step}
                token={`--${palette.name.toLowerCase()}-${step}`}
                label={step}
              />
            ))}
          </div>
        </section>
      ))}

      <section style={{ marginBottom: 48 }}>
        <h3 style={{
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 16,
          color: 'var(--grey-20)',
        }}>
          AI Gradients
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          {AI_GRADIENTS.map(g => (
            <GradientSwatch key={g.token} name={g.name} token={g.token} />
          ))}
        </div>
      </section>
    </div>
  )
}
