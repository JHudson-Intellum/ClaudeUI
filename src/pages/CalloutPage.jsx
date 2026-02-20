import Callout from '../components/Callout.jsx'
import CodeBlock from '../components/CodeBlock.jsx'

const VARIANTS = ['default', 'success', 'caution', 'warning', 'ai']

export default function CalloutPage() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Callout
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        Contextual alerts for system messages, validation, and status updates.
        5 variants with optional heading, subtext, actions, and close button.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--page-muted)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Ref: uikit/banners/callout. Rebuilt with ID.s design tokens.
      </p>

      {/* ── All variants ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        All Variants
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56, maxWidth: 640 }}>
        {VARIANTS.map(v => (
          <Callout
            key={v}
            variant={v}
            text={`This is a ${v} callout with contextual information for the user.`}
          />
        ))}
      </div>

      {/* ── With heading ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        With Heading
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56, maxWidth: 640 }}>
        <Callout
          variant="default"
          heading="Information"
          text="Page level information message alert with additional context for the user."
        />
        <Callout
          variant="warning"
          heading="Action Required"
          text="Your session will expire in 5 minutes. Please save your work."
        />
      </div>

      {/* ── With subtext ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        With Subtext
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56, maxWidth: 640 }}>
        <Callout
          variant="success"
          heading="Changes Saved"
          text="Your profile has been updated successfully."
          subText="Last saved 2 minutes ago."
        />
      </div>

      {/* ── With actions ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        With Actions
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56, maxWidth: 640 }}>
        <Callout
          variant="default"
          heading="New Feature Available"
          text="Page level information message alert with actions that could apply to any alert."
          subText="This is the subline (optional)."
          primaryAction={{ label: 'Primary Action', onClick: () => {} }}
          secondaryAction={{ label: 'Secondary Action', onClick: () => {} }}
        />
        <Callout
          variant="caution"
          text="Your subscription is expiring soon. Renew now to keep access."
          primaryAction={{ label: 'Renew Now', onClick: () => {} }}
        />
      </div>

      {/* ── With close button ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        With Close Button
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56, maxWidth: 640 }}>
        <Callout
          variant="default"
          heading="Heads Up"
          text="Scheduled maintenance this weekend. Some features may be temporarily unavailable."
          onClose={() => {}}
        />
        <Callout
          variant="warning"
          text="Unable to connect to the server. Please check your network."
          onClose={() => {}}
          primaryAction={{ label: 'Retry', onClick: () => {} }}
        />
      </div>

      {/* ── Full example ── */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
        Full Example
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56, maxWidth: 640 }}>
        <Callout
          variant="ai"
          icon="auto_awesome"
          heading="AI Summary Available"
          text="We generated a summary of this content using AI. Review it before publishing."
          subText="Powered by Intellum Assist."
          primaryAction={{ label: 'View Summary', onClick: () => {} }}
          secondaryAction={{ label: 'Dismiss', onClick: () => {} }}
          onClose={() => {}}
        />
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

      <CodeBlock title="Import">{`import Callout from '@/components/Callout'`}</CodeBlock>

      <CodeBlock title="Basic">{`<Callout text="This is an informational callout." />

<Callout variant="success" text="Operation completed." />

<Callout variant="warning" text="Something went wrong." />`}</CodeBlock>

      <CodeBlock title="With heading and actions">{`<Callout
  variant="default"
  heading="New Feature"
  text="Check out the new dashboard."
  primaryAction={{ label: 'Try It', onClick: handleClick }}
  secondaryAction={{ label: 'Later', onClick: handleDismiss }}
/>`}</CodeBlock>

      <CodeBlock title="With close button">{`<Callout
  variant="caution"
  text="Your trial expires in 3 days."
  onClose={handleClose}
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
              ['variant', '"default" | "success" | "caution" | "warning" | "ai"', '"default"', 'Color variant'],
              ['icon', 'string', 'auto per variant', 'Material Symbol name override'],
              ['heading', 'string', 'undefined', 'Bold heading text'],
              ['text', 'string | node', 'required', 'Body text content'],
              ['subText', 'string', 'undefined', 'Muted subline text'],
              ['primaryAction', '{ label, onClick }', 'undefined', 'Primary action button'],
              ['secondaryAction', '{ label, onClick }', 'undefined', 'Secondary outlined button'],
              ['onClose', 'function', 'undefined', 'Shows close button when provided'],
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

      <CodeBlock title="Token mapping">{`/* Variants → Background:
   default  → blue-50 at 5% opacity
   success  → green-50 at 5% opacity
   caution  → amber-50 at 5% opacity
   warning  → red-50 at 5% opacity
   ai       → --ai-5 gradient

   Icon colors:
   default  → --blue-50
   success  → --green-50
   caution  → --amber-50
   warning  → --red-50
   ai       → --blue-50

   Layout:
   padding      → --sizing-sm-border (11px, accounts for 1px transparent border)
   icon gap     → --sizing-sm (12px)
   text gap     → --sizing-2xs (4px)
   actions gap  → --sizing-xs (8px)

   Typography:
   heading  → support-14 / weight-medium
   body     → body-14 / weight-regular
   subText  → body-14 / weight-regular (muted)
   buttons  → support-12 / weight-medium

   Border: --border-xs transparent (reserves space for focus states)
   Radius: --rounded-md
*/`}</CodeBlock>
    </div>
  )
}
