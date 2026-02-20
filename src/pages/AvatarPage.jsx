import Avatar from '../components/Avatar.jsx'
import CodeBlock from '../components/CodeBlock.jsx'

const SIZES = ['micro', 'small', 'default', 'large', 'macro']
const STYLES = ['image', 'initial', 'icon', 'ai']

export default function AvatarPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Avatar
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        4 styles &times; 5 sizes. Supports images, initials, icons, and AI branding.
        Large and Macro sizes include a white border and elevation.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--page-muted)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Sizes map to sizing tokens: Micro (xl/24), Small (2xl/32),
        Default (3xl/36), Large (5xl/44), Macro (8xl/96).
      </p>

      {/* ── All sizes per style ── */}
      {STYLES.map(variant => (
        <div key={variant} style={{ marginBottom: 56 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, textTransform: 'capitalize' }}>
            {variant}
          </h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
            {SIZES.map(size => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Avatar
                  style={variant}
                  size={size}
                  initials="KS"
                  src="https://i.pravatar.cc/150?img=12"
                  icon="group"
                />
                <span style={{
                  fontSize: 10,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--page-muted)',
                }}>
                  {size}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ── Different initials ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        Various Initials
      </h3>
      <div style={{ display: 'flex', gap: 12, marginBottom: 56 }}>
        {['AB', 'CD', 'EF', 'GH', 'JK'].map(i => (
          <Avatar key={i} style="initial" size="default" initials={i} />
        ))}
      </div>

      {/* ── Different icons ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        Various Icons
      </h3>
      <div style={{ display: 'flex', gap: 12, marginBottom: 56 }}>
        {['group', 'person', 'school', 'work', 'support_agent'].map(ic => (
          <Avatar key={ic} style="icon" size="default" icon={ic} />
        ))}
      </div>

      {/* ── Usage ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
        paddingTop: 24,
        borderTop: '1px solid var(--code-border)',
      }}>
        Usage
      </h3>

      <CodeBlock title="Import">{`import Avatar from '@/components/Avatar'`}</CodeBlock>

      <CodeBlock title="Image">{`<Avatar style="image" src="/photo.jpg" alt="User" />
<Avatar style="image" size="macro" src="/photo.jpg" />`}</CodeBlock>

      <CodeBlock title="Initials">{`<Avatar style="initial" initials="KS" />
<Avatar style="initial" size="large" initials="AB" />`}</CodeBlock>

      <CodeBlock title="Icon">{`<Avatar style="icon" icon="group" />
<Avatar style="icon" size="small" icon="person" />`}</CodeBlock>

      <CodeBlock title="AI">{`<Avatar style="ai" />
<Avatar style="ai" size="macro" />`}</CodeBlock>

      {/* ── Props ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, marginTop: 32 }}>
        Props
      </h3>

      <div style={{
        border: '1px solid var(--code-border)',
        borderRadius: 'var(--rounded-md)',
        overflow: 'hidden',
        marginBottom: 56,
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
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
              ['style', '"image" | "initial" | "icon" | "ai"', '"initial"', 'Avatar variant'],
              ['size', '"micro" | "small" | "default" | "large" | "macro"', '"default"', 'Avatar size'],
              ['initials', 'string', '"KS"', 'Initials text (initial style)'],
              ['src', 'string', 'undefined', 'Image URL (image style)'],
              ['alt', 'string', '""', 'Image alt text'],
              ['icon', 'string', '"group"', 'Material Symbol name (icon style)'],
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

      {/* ── Architecture ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        Architecture
      </h3>

      <CodeBlock title="Token mapping">{`/* Sizes → Sizing tokens:
   micro:   --sizing-xl   (24px)
   small:   --sizing-2xl  (32px)
   default: --sizing-3xl  (36px)
   large:   --sizing-5xl  (44px)
   macro:   --sizing-8xl  (96px)

   Border (Large + Macro only):
     width  → --border-md (3px)
     color  → --white-alpha-100
     shadow → --elevation-lg

   Backgrounds:
     initial → --grey-80  (brand-neutrals/80)
     icon    → --grey-80  (brand-neutrals/80)
     ai      → --ai-100   (gradient)
     image   → user photo

   Text/Icon color:
     initial → --grey-10  (brand-neutrals/10)
     icon    → --grey-10
     ai      → --white-alpha-100

   Border radius: --rounded-full (9999px)

   All colors adapt to dark mode via primitive inversion.
*/`}</CodeBlock>
    </div>
  )
}
