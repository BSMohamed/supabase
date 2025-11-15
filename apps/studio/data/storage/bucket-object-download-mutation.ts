// Stub file: Storage was removed in cleanup
// This file provides hooks to prevent build errors

export const useBucketObjectDownloadMutation = () => {
  return {
    mutate: () => console.warn('Storage functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}

export const downloadBucketObject = async () => {
  console.warn('Storage functionality has been removed')
  return { error: null }
}
