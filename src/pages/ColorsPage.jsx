const PALETTES = [
  {
    name: 'Grey',
    steps: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 200],
  },
  {
    name: 'Blue',
    label: 'Blue / Brand',
    steps: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
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
  { name: 'AI 5', token: '--ai-5' },
  { name: 'AI 10', token: '--ai-10' },
  { name: 'AI 20', token: '--ai-20' },
  { name: 'AI 40', token: '--ai-40' },
  { name: 'AI 50', token: '--ai-50' },
  { name: 'AI 60', token: '--ai-60' },
  { name: 'AI 70', token: '--ai-70' },
  { name: 'AI 80', token: '--ai-80' },
  { name: 'AI 90', token: '--ai-90' },
  { name: 'AI 100', token: '--ai-100' },
]

const ALPHA_STEPS = [
  { step: '0', label: '0%' },
  { step: '001', label: '0.01%' },
  { step: '333', label: '3.33%' },
  { step: '5', label: '5%' },
  { step: '10', label: '10%' },
  { step: '15', label: '15%' },
  { step: '20', label: '20%' },
  { step: '30', label: '30%' },
  { step: '40', label: '40%' },
  { step: '50', label: '50%' },
  { step: '60', label: '60%' },
  { step: '70', label: '70%' },
  { step: '80', label: '80%' },
  { step: '90', label: '90%' },
  { step: '95', label: '95%' },
  { step: '100', label: '100%' },
]

function Swatch({ token, label }) {
  return (
    <div style={{ width: 72, textAlign: 'center' }}>
      <div style={{
        width: '100%',
        height: 56,
        borderRadius: 8,
        background: `var(${token})`,
        border: '1px solid var(--swatch-border)',
      }} />
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        marginTop: 6,
        color: 'var(--page-text)',
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 10,
        color: 'var(--page-muted)',
        fontFamily: 'monospace',
      }}>
        {token}
      </div>
    </div>
  )
}

function AlphaSwatch({ token, label }) {
  return (
    <div style={{ width: 72, textAlign: 'center' }}>
      <div style={{
        width: '100%',
        height: 56,
        borderRadius: 8,
        background: `var(${token})`,
        border: '1px solid var(--swatch-border)',
        backgroundImage: `
          linear-gradient(45deg, var(--grey-80) 25%, transparent 25%),
          linear-gradient(-45deg, var(--grey-80) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, var(--grey-80) 75%),
          linear-gradient(-45deg, transparent 75%, var(--grey-80) 75%)
        `,
        backgroundSize: '12px 12px',
        backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: 7,
          background: `var(${token})`,
        }} />
      </div>
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        marginTop: 6,
        color: 'var(--page-text)',
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 10,
        color: 'var(--page-muted)',
        fontFamily: 'monospace',
      }}>
        {token}
      </div>
    </div>
  )
}

function SectionHeader({ title }) {
  return (
    <h3 style={{
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 16,
      color: 'var(--page-text)',
    }}>
      {title}
    </h3>
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
        color: 'var(--page-secondary)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Raw palette values from the Figma token set (Light mode). These
        primitives serve as the foundation — semantic tokens will reference
        them for light and dark mode mappings.
      </p>

      {PALETTES.map(palette => (
        <section key={palette.name} style={{ marginBottom: 48 }}>
          <SectionHeader title={palette.label || palette.name} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
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
        <SectionHeader title="AI Gradients" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {AI_GRADIENTS.map(g => (
            <Swatch key={g.token} token={g.token} label={g.name} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <SectionHeader title="White Alpha" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {ALPHA_STEPS.map(a => (
            <AlphaSwatch
              key={`white-${a.step}`}
              token={`--white-alpha-${a.step}`}
              label={a.label}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <SectionHeader title="Black Alpha" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {ALPHA_STEPS.map(a => (
            <AlphaSwatch
              key={`black-${a.step}`}
              token={`--black-alpha-${a.step}`}
              label={a.label}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
