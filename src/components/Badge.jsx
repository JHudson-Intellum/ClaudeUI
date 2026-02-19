import styles from './Badge.module.css'

const COLOR_MAP = {
  'default-max': styles.defaultMax,
  'default-mid': styles.defaultMid,
  'default-min': styles.defaultMin,
  'destructive-max': styles.destructiveMax,
  'destructive-min': styles.destructiveMin,
  'success-max': styles.successMax,
  'success-min': styles.successMin,
  'alert-max': styles.alertMax,
  'alert-min': styles.alertMin,
  'brand-max': styles.brandMax,
  'brand-min': styles.brandMin,
}

const SIZE_MAP = {
  small: styles.small,
  default: styles.default,
  large: styles.large,
}

export default function Badge({
  children = 'Badge Text',
  color = 'default-max',
  size = 'default',
  icon,
  showIcon = true,
}) {
  const colorClass = COLOR_MAP[color] || COLOR_MAP['default-max']
  const sizeClass = SIZE_MAP[size] || SIZE_MAP['default']

  return (
    <span className={`${styles.badge} ${sizeClass} ${colorClass}`}>
      {showIcon && icon && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
    </span>
  )
}
