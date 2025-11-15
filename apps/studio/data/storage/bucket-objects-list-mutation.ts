// Stub file: Storage was removed in cleanup
// This file provides hooks to prevent build errors

export const useBucketObjectsListMutation = () => {
  return {
    mutate: () => console.warn('Storage functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}

export type StorageObject = {
  id?: string
  name: string
  metadata?: any
}

export const listBucketObjects = async () => {
  console.warn('Storage functionality has been removed')
  return []
}
