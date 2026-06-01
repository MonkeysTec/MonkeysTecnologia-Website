import type { LucideIcon } from 'lucide-react'

export type ServicePreviewType = 'web' | 'automation' | 'data' | 'support'

export type IconContent = {
  icon: LucideIcon
  title: string
  text: string
}

export type ServiceContent = IconContent & {
  preview: ServicePreviewType
}

export type EntryPath = {
  title: string
  label: string
  text: string
}

export type ContactOption = {
  icon?: LucideIcon
  image?: string
  label: string
  href: string
}
