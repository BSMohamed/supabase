// Stub file: SQL Editor was removed in cleanup
// This file provides utility functions to prevent build errors

export const createSqlSnippetSkeletonV2 = (sql: string, name?: string) => ({
  id: undefined,
  name: name || 'New query',
  sql,
})

export const suffixWithLimit = (sql: string, limit?: number) => {
  if (!limit) return sql
  return `${sql.trim()} LIMIT ${limit}`
}
