// Stub file: Support was removed in cleanup
// This file provides hooks to prevent build errors

export const useGenerateAttachmentUrlsMutation = () => {
  return {
    mutate: () => console.warn('Support functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}
