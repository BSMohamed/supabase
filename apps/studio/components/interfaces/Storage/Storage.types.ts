// Stub file: Storage was removed in cleanup
// This file provides types to prevent build errors

export type StorageColumn = string

export type StorageItem = {
  id?: string
  name: string
  type?: string
  size?: number
  created_at?: string
  updated_at?: string
  metadata?: any
}

export type StorageItemMetadata = {
  size?: number
  mimetype?: string
  cacheControl?: string
  lastModified?: string
  [key: string]: any
}

export type StorageItemWithColumn = StorageItem & {
  column?: StorageColumn
}
