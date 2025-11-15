// Stub file: Storage was removed in cleanup
// This file provides hooks to prevent build errors

export const useBucketPrefixDeleteMutation = () => {
  return {
    mutate: () => console.warn('Storage functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}

export const deleteBucketPrefix = async () => {
  console.warn('Storage functionality has been removed')
  return { error: null }
}
