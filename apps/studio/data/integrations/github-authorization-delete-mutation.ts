// Stub file: GitHub integrations were removed in cleanup
// This file provides hooks to prevent build errors

export const useGitHubAuthorizationDeleteMutation = () => {
  return {
    mutate: () => console.warn('GitHub integration functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}
