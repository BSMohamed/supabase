// Stub file: Storage was removed in cleanup
// This file provides hooks to prevent build errors

export const useBucketObjectDeleteMutation = () => {
  return {
    mutate: () => console.warn('Storage functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}

export const deleteBucketObject = async () => {
  console.warn('Storage functionality has been removed')
  return { error: null }
}
