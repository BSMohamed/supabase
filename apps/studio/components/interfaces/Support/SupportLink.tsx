// Stub file: Support was removed in cleanup
// This component provides a placeholder to prevent build errors

import React from 'react'
import Link from 'next/link'

export const SupportLink: React.FC<{ category?: string; children?: React.ReactNode; [key: string]: any }> = ({
  category,
  children,
  ...props
}) => {
  return (
    <Link href="https://supabase.com/support" target="_blank" rel="noopener noreferrer" {...props}>
      {children || 'Contact Support'}
    </Link>
  )
}
