import Badge from '../components/Badge.jsx'

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
        color: 'var(--grey-40)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        Compact labels for status, categories, and counts.
        3 sizes &times; 11 color variants using messaging semantic tokens.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--grey-50)',
        marginBottom: 48,
        maxWidth: 600,
      }}>
        Max = solid background. Mid = muted solid. Min = outlined with border.
      </p>

      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--grey-10)',
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
              fontFamily: 'monospace',
              color: 'var(--grey-50)',
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

      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--grey-10)',
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

      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--grey-10)',
        marginBottom: 24,
      }}>
        With Icons
      </h3>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Badge color="success-max" icon="check_circle">Approved</Badge>
        <Badge color="destructive-min" icon="error">Failed</Badge>
        <Badge color="alert-min" icon="warning">Pending</Badge>
        <Badge color="brand-min" icon="info">Info</Badge>
        <Badge color="default-mid" icon="schedule">Scheduled</Badge>
      </div>
    </div>
  )
}
