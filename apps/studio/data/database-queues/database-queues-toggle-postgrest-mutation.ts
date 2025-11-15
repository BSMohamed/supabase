// Stub file: Database Queues was removed in cleanup
// This file provides hooks to prevent build errors

export const useDatabaseQueuesTogglePostgrestMutation = () => {
  return {
    mutate: () => console.warn('Database Queues functionality has been removed'),
    isLoading: false,
    isError: false,
  }
}

export const QUEUES_SCHEMA = 'pgmq'
