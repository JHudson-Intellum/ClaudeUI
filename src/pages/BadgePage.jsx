import Badge from '../components/Badge.jsx'
import CodeBlock from '../components/CodeBlock.jsx'

const COLORS = [
  { id: 'default-max', label: 'Default Max' },
  { id: 'default-mid', label: 'Default Mid' },
  { id: 'default-min', label: 'Default Min' },
  { id: 'success-max', label: 'Success Max' },
  { id: 'success-min', label: 'Success Min' },
  { id: 'destructive-max', label: 'Destructive Max' },
  { id: 'destructive-min', label: 'Destructive Min' },
  { id: 'alert-max', label: 'Alert Max' },
  { id: 'alert-min', label: 'Alert Min' },
  { id: 'brand-max', label: 'Brand Max' },
  { id: 'brand-min', label: 'Brand Min' },
]

const SIZES = ['small', 'default', 'large']

export default function BadgePage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Badge
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        Compact labels for status, categories, and counts.
        3 sizes &times; 11 color variants using messaging semantic tokens.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--page-muted)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Max = solid background. Mid = muted solid. Min = outlined with border.
      </p>

      {/* ── All variants ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
      }}>
        All Variants
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '20px 32px',
        alignItems: 'center',
        marginBottom: 56,
      }}>
        {COLORS.map(color => (
          <div key={color.id} style={{ display: 'contents' }}>
            <div style={{
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              color: 'var(--page-muted)',
              minWidth: 140,
            }}>
              {color.id}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {SIZES.map(size => (
                <Badge key={size} color={color.id} size={size} icon="info">
                  {color.label}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Without icons ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
      }}>
        Without Icon
      </h3>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
        <Badge color="default-max" showIcon={false}>Status</Badge>
        <Badge color="success-max" showIcon={false}>Active</Badge>
        <Badge color="destructive-max" showIcon={false}>Error</Badge>
        <Badge color="alert-max" showIcon={false}>Warning</Badge>
        <Badge color="brand-max" showIcon={false}>New</Badge>
      </div>

      {/* ── With icons ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
      }}>
        With Icons
      </h3>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
        <Badge color="success-max" icon="check_circle">Approved</Badge>
        <Badge color="destructive-min" icon="error">Failed</Badge>
        <Badge color="alert-min" icon="warning">Pending</Badge>
        <Badge color="brand-min" icon="info">Info</Badge>
        <Badge color="default-mid" icon="schedule">Scheduled</Badge>
      </div>

      {/* ── Code snippets ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
        paddingTop: 24,
        borderTop: '1px solid var(--code-border)',
      }}>
        Usage
      </h3>

      <CodeBlock title="Import">{`import Badge from '@/components/Badge'`}</CodeBlock>

      <CodeBlock title="Basic">{`<Badge>Default</Badge>

<Badge color="success-max">Active</Badge>

<Badge color="destructive-min" size="small">Error</Badge>`}</CodeBlock>

      <CodeBlock title="With icon (Google Material Symbols)">{`<Badge color="success-max" icon="check_circle">
  Approved
</Badge>

<Badge color="alert-min" icon="warning" size="large">
  Pending Review
</Badge>`}</CodeBlock>

      <CodeBlock title="Without icon">{`<Badge color="brand-max" showIcon={false}>
  New
</Badge>`}</CodeBlock>

      {/* ── Props table ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
        marginTop: 32,
      }}>
        Props
      </h3>

      <div style={{
        border: '1px solid var(--code-border)',
        borderRadius: 'var(--rounded-md)',
        overflow: 'hidden',
        marginBottom: 56,
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: 13,
        }}>
          <thead>
            <tr style={{ background: 'var(--code-bg)' }}>
              {['Prop', 'Type', 'Default', 'Description'].map(h => (
                <th key={h} style={{
                  textAlign: 'left',
                  padding: '10px 16px',
                  fontWeight: 600,
                  borderBottom: '1px solid var(--code-border)',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['children', 'ReactNode', '"Badge Text"', 'Label content'],
              ['color', 'string', '"default-max"', 'Color variant (see list above)'],
              ['size', '"small" | "default" | "large"', '"default"', 'Badge size'],
              ['icon', 'string', 'undefined', 'Material Symbol name'],
              ['showIcon', 'boolean', 'true', 'Toggle icon visibility'],
            ].map(([prop, type, def, desc]) => (
              <tr key={prop} style={{ borderBottom: '1px solid var(--code-border)' }}>
                <td style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{prop}</td>
                <td style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', color: 'var(--page-muted)' }}>{type}</td>
                <td style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', color: 'var(--page-muted)' }}>{def}</td>
                <td style={{ padding: '10px 16px' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Architecture note ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
      }}>
        Architecture
      </h3>

      <CodeBlock title="File structure">{`src/components/
  Badge.jsx            # React component
  Badge.module.css     # CSS Modules styles`}</CodeBlock>

      <CodeBlock title="How it works">{`/* Badge uses CSS Modules with semantic token references.
   Colors come from --msg-* tokens defined in tokens/semantic.css.
   These map to primitive color values (grey, red, green, amber, blue).

   Token chain example:
   Badge "success-max" background
     → CSS Module class .successMax
     → background: var(--msg-success-background-max)
     → semantic.css: var(--green-30)
     → colors.css: #276d35

   Sizes use spacing tokens for padding:
     small:   height 20px, px var(--sizing-xs),  font 10px
     default: height 24px, px var(--sizing-xs),  font 12px
     large:   height 32px, px var(--sizing-sm),  font 14px

   Icons use Google Material Symbols Outlined font.
   Pass any symbol name as the icon prop (e.g. "check_circle").
*/`}</CodeBlock>

      <CodeBlock title="Color variants">{`/* 11 color variants across 3 intensity levels:

   Max (solid bg, high contrast text):
     default-max, destructive-max, success-max, alert-max, brand-max

   Mid (solid bg, muted):
     default-mid

   Min (transparent bg, colored border + text):
     default-min, destructive-min, success-min, alert-min, brand-min

   All colors reference --msg-{type}-{role}-{intensity} semantic tokens.
   Light/dark mode is handled at the semantic token layer —
   the component CSS never changes.
*/`}</CodeBlock>
    </div>
  )
}
