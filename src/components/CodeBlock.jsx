export default function CodeBlock({ title, children }) {
  return (
    <div style={{
      marginBottom: 24,
    }}>
      {title && (
        <div style={{
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--page-muted)',
          marginBottom: 8,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {title}
        </div>
      )}
      <pre style={{
        padding: 20,
        background: 'var(--code-bg)',
        border: '1px solid var(--code-border)',
        borderRadius: 'var(--rounded-md)',
        fontSize: 13,
        fontFamily: 'var(--font-mono)',
        color: 'var(--code-text)',
        lineHeight: 1.6,
        overflowX: 'auto',
        whiteSpace: 'pre',
        margin: 0,
      }}>
        {children}
      </pre>
    </div>
  )
}
