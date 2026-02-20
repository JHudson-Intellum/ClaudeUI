import styles from './Callout.module.css'

const VARIANT_MAP = {
  default: styles.default,
  success: styles.success,
  caution: styles.caution,
  warning: styles.warning,
  ai: styles.ai,
}

const DEFAULT_ICONS = {
  default: 'info',
  success: 'check_circle',
  caution: 'warning',
  warning: 'error',
  ai: 'auto_awesome',
}

export default function Callout({
  variant = 'default',
  icon,
  heading,
  text,
  subText,
  primaryAction,
  secondaryAction,
  onClose,
}) {
  const variantClass = VARIANT_MAP[variant] || VARIANT_MAP['default']
  const iconName = icon ?? DEFAULT_ICONS[variant]

  return (
    <div className={`${styles.callout} ${variantClass}`}>
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.materialIcon}>{iconName}</span>
          <div className={styles.text}>
            {heading && <div className={styles.heading}>{heading}</div>}
            <div className={styles.body}>{text}</div>
            {subText && <div className={styles.subText}>{subText}</div>}
          </div>
        </div>
        {(primaryAction || secondaryAction) && (
          <div className={styles.actions}>
            {primaryAction && (
              <button
                className={`${styles.actionButton} ${styles.actionPrimary}`}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </button>
            )}
            {secondaryAction && (
              <button
                className={`${styles.actionButton} ${styles.actionSecondary}`}
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </button>
            )}
          </div>
        )}
      </div>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <span className={styles.materialIcon} style={{ fontSize: 20 }}>close</span>
        </button>
      )}
    </div>
  )
}
