// Stub file: SQL Editor was removed in cleanup
// This component provides a placeholder to prevent build errors

import React from 'react'

interface ResultsProps {
  rows?: any[]
  error?: any
  [key: string]: any
}

const Results: React.FC<ResultsProps> = ({ rows, error, ...props }) => {
  if (error) {
    return <div className="p-4 text-red-500">Error: {error.message || 'Query failed'}</div>
  }

  if (!rows || rows.length === 0) {
    return <div className="p-4 text-foreground-light">No results</div>
  }

  return (
    <div className="p-4">
      <p className="text-sm text-foreground-light">{rows.length} rows returned</p>
    </div>
  )
}

export default Results
