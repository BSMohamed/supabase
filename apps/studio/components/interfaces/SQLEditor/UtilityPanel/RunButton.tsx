// Stub file: SQL Editor was removed in cleanup
// This component provides a placeholder to prevent build errors

import React from 'react'
import { Button } from 'ui'
import { Play } from 'lucide-react'

interface SqlRunButtonProps {
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
}

export const SqlRunButton: React.FC<SqlRunButtonProps> = ({ onClick, loading, disabled }) => {
  return (
    <Button
      type="primary"
      size="tiny"
      icon={<Play size={14} />}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
    >
      Run
    </Button>
  )
}
