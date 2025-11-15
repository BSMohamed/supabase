// Stub file: Storage was removed in cleanup
// This file provides hooks to prevent build errors

export type Bucket = {
  id: string
  name: string
  public?: boolean
  file_size_limit?: number
  allowed_mime_types?: string[]
  created_at?: string
  updated_at?: string
}

export const useBucketsQuery = () => {
  return {
    data: undefined,
    error: null,
    isLoading: false,
  }
}

export const useBucketQuery = () => {
  return {
    data: undefined,
    error: null,
    isLoading: false,
  }
}
