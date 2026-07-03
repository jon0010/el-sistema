import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type SeonexBtnVariant = 'lime' | 'blue' | 'border'

interface SeonexBtnProps {
  children: ReactNode
  href?: string
  variant?: SeonexBtnVariant
  big?: boolean
  className?: string
}

const variantClass: Record<SeonexBtnVariant, string> = {
  lime: 'style-color-dt-light',
  blue: 'style-color-dt-blue',
  border: 'style-border',
}

export function SeonexBtn({ children, href, variant = 'blue', big = false, className = '' }: SeonexBtnProps) {
  const classes = `tf-btn ${big ? 'style-big' : ''} ${variantClass[variant]} ${className}`.trim()

  const inner = (
    <>
      <span className="text-btn">{children}</span>
      <span className="icon-btn">
        <i className="icon-arrow-up-right" />
      </span>
    </>
  )

  if (href?.startsWith('/')) {
    return (
      <Link to={href} className={classes}>
        {inner}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {inner}
    </button>
  )
}
