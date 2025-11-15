// Stub file: Edge Functions was removed in cleanup
// This file provides hooks to prevent build errors

export const useEdgeFunctionDeployMutation = () => {
  return {
    mutate: () => console.warn('Edge Functions functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}
