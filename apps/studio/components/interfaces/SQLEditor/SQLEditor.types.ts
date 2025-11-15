// Stub file: SQL Editor was removed in cleanup
// This file provides type exports to prevent build errors

export enum DiffType {
  Addition = 'addition',
  Modification = 'modification',
  NewSnippet = 'new-snippet',
}

export type SqlSnippet = {
  id?: string
  name?: string
  sql?: string
}
