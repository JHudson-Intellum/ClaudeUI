import SocialShare from '../components/SocialShare.jsx'
import CodeBlock from '../components/CodeBlock.jsx'

export default function SocialSharePage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Social Share
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        Favorites toggle + share popover with platform icons.
        Includes X, Facebook, LinkedIn, and copy-link actions.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--page-muted)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Uses semantic surface/border tokens, elevation for the popover,
        and grey primitives for icon buttons.
      </p>

      {/* ── Default ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        Default
      </h3>

      <div style={{
        padding: 32,
        background: 'var(--surface-primary)',
        borderRadius: 'var(--rounded-md)',
        border: '1px solid var(--swatch-border)',
        marginBottom: 56,
      }}>
        <SocialShare
          url="https://example.com/article"
          title="Compare User Acquisition Methods"
        />
      </div>

      {/* ── Without Favorites ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        Share Only (no favorites)
      </h3>

      <div style={{
        padding: 32,
        background: 'var(--surface-primary)',
        borderRadius: 'var(--rounded-md)',
        border: '1px solid var(--swatch-border)',
        marginBottom: 56,
      }}>
        <SocialShare showFavorite={false} />
      </div>

      {/* ── In context ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        In Context
      </h3>

      <div style={{
        padding: 32,
        background: 'var(--surface-primary)',
        borderRadius: 'var(--rounded-md)',
        border: '1px solid var(--swatch-border)',
        marginBottom: 56,
      }}>
        <h3 style={{
          fontSize: 24,
          fontWeight: 700,
          color: 'var(--grey-10)',
          marginBottom: 8,
        }}>
          Compare User Acquisition Methods
        </h3>
        <p style={{
          fontSize: 13,
          color: 'var(--grey-50)',
          marginBottom: 16,
        }}>
          By Intellum Education &nbsp;&middot;&nbsp; Published Nov 14, 2019
          &nbsp;&middot;&nbsp; 8m &nbsp;&middot;&nbsp; Intermediate
        </p>
        <div style={{
          borderTop: '1px solid var(--border-primary)',
          paddingTop: 16,
        }}>
          <SocialShare
            url="https://example.com/article"
            title="Compare User Acquisition Methods"
          />
        </div>
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

      <CodeBlock title="Import">{`import SocialShare from '@/components/SocialShare'`}</CodeBlock>

      <CodeBlock title="Basic">{`<SocialShare
  url="https://example.com/article"
  title="Article Title"
/>`}</CodeBlock>

      <CodeBlock title="Without favorites">{`<SocialShare showFavorite={false} />`}</CodeBlock>

      <CodeBlock title="With callbacks">{`<SocialShare
  url="https://example.com/article"
  title="Article Title"
  favorited={true}
  onFavoriteChange={(isFav) => console.log('Favorited:', isFav)}
  onShare={(platform, url, title) => {
    console.log('Shared via', platform)
  }}
/>`}</CodeBlock>

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
              ['url', 'string', '""', 'URL to share (falls back to current page)'],
              ['title', 'string', '""', 'Title text for share actions'],
              ['showFavorite', 'boolean', 'true', 'Show the favorites toggle'],
              ['favorited', 'boolean', 'false', 'Initial favorited state'],
              ['onFavoriteChange', '(boolean) => void', 'undefined', 'Called when favorite is toggled'],
              ['onShare', '(platform, url, title) => void', 'undefined', 'Called when a platform is clicked'],
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

      <CodeBlock title="File structure">{`src/components/
  SocialShare.jsx            # React component
  SocialShare.module.css     # CSS Modules styles`}</CodeBlock>

      <CodeBlock title="How it works">{`/* SocialShare uses CSS Modules with design tokens.

   Popover:
     background  → var(--surface-primary)
     border      → var(--border-primary)
     shadow      → var(--elevation-md)
     radius      → var(--rounded-md)

   Icon buttons:
     background  → var(--grey-10)   (dark in light mode, light in dark mode)
     color       → var(--grey-100)  (inverts with mode)
     radius      → var(--rounded-sm)

   Action text (Favorites / Share):
     color       → var(--grey-40) → var(--grey-10) on hover
     icon        → Material Symbols Rounded

   Platform icons:
     X, Facebook, LinkedIn → inline SVG
     Copy link             → Material Symbol "link"

   The popover auto-closes on outside click.
   Copy link writes to clipboard and shows "Copied!" tooltip.
   All colors adapt to dark mode via primitive inversion.
*/`}</CodeBlock>
    </div>
  )
}
