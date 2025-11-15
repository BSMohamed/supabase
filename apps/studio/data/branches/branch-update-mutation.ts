// Stub file: Branches was removed in cleanup
// This file provides hooks to prevent build errors

export const useBranchUpdateMutation = () => {
  return {
    mutate: () => console.warn('Branch functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}
