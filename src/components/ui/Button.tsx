import { ArrowUpRight, Check, ChevronRight, Menu, Play, Quote, X } from 'lucide-react'
import type { ReactNode } from 'react'

type TfBtnVariant = 'lime' | 'blue' | 'border' | 'white'
type TfBtnSize = 'default' | 'big'

interface TfButtonProps {
  children: ReactNode
  href?: string
  variant?: TfBtnVariant
  size?: TfBtnSize
  className?: string
  onClick?: () => void
}

const variantClass: Record<TfBtnVariant, string> = {
  lime: 'style-color-dt-light',
  blue: 'style-color-dt-blue',
  border: 'style-border',
  white: '',
}

export function TfButton({
  children,
  href,
  variant = 'blue',
  size = 'default',
  className = '',
  onClick,
}: TfButtonProps) {
  const classes = `tf-btn ${variantClass[variant]} ${size === 'big' ? 'style-big' : ''} ${className}`.trim()

  const content = (
    <>
      <span className="text-btn">{children}</span>
      <span className="icon-btn">
        <ArrowUpRight size={18} strokeWidth={2} />
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  )
}

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'lime' | 'dark' | 'white'
  size?: 'default' | 'large'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
}: ButtonProps) {
  const variantMap: Record<string, TfBtnVariant> = {
    lime: 'lime',
    primary: 'blue',
    outline: 'border',
    dark: 'blue',
    white: 'white',
  }

  return (
    <TfButton
      href={href}
      variant={variantMap[variant] ?? 'blue'}
      size={size === 'large' ? 'big' : 'default'}
      className={className}
      onClick={onClick}
    >
      {children}
    </TfButton>
  )
}

export function CheckIcon() {
  return <Check className="h-5 w-5 shrink-0 text-dm-blue" strokeWidth={2.5} />
}

export function SectionEyebrow({
  text,
  accent,
  className = '',
}: {
  text: string
  accent: string
  className?: string
}) {
  return (
    <p className={`text-sm font-medium uppercase tracking-wide text-dm-black/70 md:text-base ${className}`}>
      {text} <span className="text-dm-blue">{accent}</span>
    </p>
  )
}

export function SectionTitle({
  children,
  className = '',
  light = false,
}: {
  children: ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <h2
      className={`text-3xl font-semibold leading-tight letter-tight md:text-4xl lg:text-5xl xl:text-[56px] xl:leading-[1.1] ${
        light ? 'text-white' : 'text-dm-black'
      } ${className}`}
    >
      {children}
    </h2>
  )
}

export { ArrowUpRight, ChevronRight, Menu, Play, Quote, X }
