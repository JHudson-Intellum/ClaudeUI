import styles from './Avatar.module.css'

const SIZE_MAP = {
  micro: styles.micro,
  small: styles.small,
  default: styles.default,
  large: styles.large,
  macro: styles.macro,
}

const FONT_SIZES = {
  micro: 10,
  small: 10,
  default: 12,
  large: 14,
  macro: 32,
}

const ICON_SIZES = {
  micro: 14,
  small: 16,
  default: 18,
  large: 22,
  macro: 44,
}

export default function Avatar({
  style: variant = 'initial',
  size = 'default',
  initials = 'KS',
  src,
  alt = '',
  icon = 'group',
}) {
  const sizeClass = SIZE_MAP[size] || SIZE_MAP['default']
  const hasBorder = size === 'macro'
  const borderClass = hasBorder ? styles.bordered : ''

  if (variant === 'image') {
    return (
      <div className={`${styles.avatar} ${sizeClass} ${borderClass}`}>
        <img
          className={styles.image}
          src={src}
          alt={alt}
        />
      </div>
    )
  }

  if (variant === 'ai') {
    return (
      <div className={`${styles.avatar} ${styles.ai} ${sizeClass} ${borderClass}`}>
        <span
          className={styles.materialIcon}
          style={{ fontSize: ICON_SIZES[size] || 18 }}
        >
          auto_awesome
        </span>
      </div>
    )
  }

  if (variant === 'icon') {
    return (
      <div className={`${styles.avatar} ${styles.iconBg} ${sizeClass} ${borderClass}`}>
        <span
          className={styles.materialIcon}
          style={{ fontSize: ICON_SIZES[size] || 18 }}
        >
          {icon}
        </span>
      </div>
    )
  }

  // initial (default)
  return (
    <div className={`${styles.avatar} ${styles.initialBg} ${sizeClass} ${borderClass}`}>
      <span
        className={styles.initials}
        style={{ fontSize: FONT_SIZES[size] || 12 }}
      >
        {initials}
      </span>
    </div>
  )
}
