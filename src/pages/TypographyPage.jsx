const DISPLAY_SIZES = [40, 32, 24, 20, 18, 16, 14]

const BODY_SIZES = [18, 16, 14, 12]
const BODY_WEIGHTS = [
  { label: 'Bold', weight: 700 },
  { label: 'Medium', weight: 600 },
  { label: 'Regular', weight: 400 },
]

const MONO_SIZES = [14, 12, 10]
const MONO_VARIANTS = [
  { label: 'Medium', weight: 600, italic: false },
  { label: 'Medium Italic', weight: 600, italic: true },
  { label: 'Regular', weight: 400, italic: false },
  { label: 'Italic', weight: 400, italic: true },
]

const SUPPORT_SIZES = [16, 14, 12, 10]
const SUPPORT_WEIGHTS = [
  { label: 'Bold', weight: 700 },
  { label: 'Medium', weight: 600 },
  { label: 'Regular', weight: 400 },
]

const COPY_WEIGHTS = [
  { label: 'Bold', weight: 700 },
  { label: 'Medium', weight: 600 },
  { label: 'Regular', weight: 400 },
]

function SectionHeader({ title, description }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--grey-20)' }}>
        {title}
      </h3>
      {description && (
        <p style={{ fontSize: 13, color: 'var(--grey-50)', marginTop: 4 }}>
          {description}
        </p>
      )}
    </div>
  )
}

function TokenLabel({ text }) {
  return (
    <span style={{
      fontSize: 10,
      fontFamily: 'monospace',
      color: 'var(--grey-50)',
      display: 'block',
      marginTop: 2,
    }}>
      {text}
    </span>
  )
}

export default function TypographyPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Typography
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--grey-40)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Five type families — Display for headings, Body for UI text, Mono for
        code, Support for labels and captions, and Copy for long-form content.
      </p>

      {/* Display */}
      <section style={{ marginBottom: 56 }}>
        <SectionHeader
          title="Display"
          description="Inter Bold — negative letter-spacing for tight, impactful headings"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {DISPLAY_SIZES.map(size => (
            <div key={size}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: `var(--display-${size}-size)`,
                lineHeight: `var(--display-${size}-line-height)`,
                letterSpacing: `var(--display-${size}-letter-spacing)`,
              }}>
                Display {size}
              </div>
              <TokenLabel text={`--display-${size}-size · --display-${size}-line-height · --display-${size}-letter-spacing`} />
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section style={{ marginBottom: 56 }}>
        <SectionHeader
          title="Body"
          description="Inter — Bold (700), Medium (600), Regular (400)"
        />
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {BODY_SIZES.map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {BODY_WEIGHTS.map(w => (
                <div key={w.label}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: w.weight,
                    fontSize: `var(--body-${size}-size)`,
                    lineHeight: `var(--body-${size}-line-height)`,
                  }}>
                    Body {size}
                  </div>
                  <TokenLabel text={`${w.label} · --body-${size}-size`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Monospace */}
      <section style={{ marginBottom: 56 }}>
        <SectionHeader
          title="Monospace"
          description="Inter — Medium (600), Medium Italic, Regular (400), Italic"
        />
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {MONO_SIZES.map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {MONO_VARIANTS.map(v => (
                <div key={v.label}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: v.weight,
                    fontStyle: v.italic ? 'italic' : 'normal',
                    fontSize: `var(--mono-${size}-size)`,
                    lineHeight: `var(--mono-${size}-line-height)`,
                  }}>
                    Mono {size}
                  </div>
                  <TokenLabel text={`${v.label} · --mono-${size}-size`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Support */}
      <section style={{ marginBottom: 56 }}>
        <SectionHeader
          title="Support"
          description="Inter — Bold (700), Medium (600), Regular (400)"
        />
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {SUPPORT_SIZES.map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {SUPPORT_WEIGHTS.map(w => (
                <div key={w.label}>
                  <div style={{
                    fontFamily: 'var(--font-support)',
                    fontWeight: w.weight,
                    fontSize: `var(--support-${size}-size)`,
                    lineHeight: `var(--support-${size}-line-height)`,
                  }}>
                    Support {size}
                  </div>
                  <TokenLabel text={`${w.label} · --support-${size}-size`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Copy */}
      <section style={{ marginBottom: 56 }}>
        <SectionHeader
          title="Copy"
          description="Source Serif Pro — Bold (700), Medium (600), Regular (400) — size 18 only"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {COPY_WEIGHTS.map(w => (
            <div key={w.label}>
              <div style={{
                fontFamily: 'var(--font-copy)',
                fontWeight: w.weight,
                fontSize: 'var(--copy-18-size)',
                lineHeight: 'var(--copy-18-line-height)',
              }}>
                Copy 18 — The quick brown fox jumps over the lazy dog
              </div>
              <TokenLabel text={`${w.label} · --copy-18-size`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
