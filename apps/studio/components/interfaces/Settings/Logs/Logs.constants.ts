// Stub file: Logs settings were removed in cleanup
// This file provides constants to prevent build errors

export const LOG_LEVELS = []

export const LOG_RETENTION_PERIODS = []

export const LOG_SOURCES = []

export const getDefaultHelper = () => ({
  label: '24 hours',
  calcFrom: () => new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  calcTo: () => new Date().toISOString(),
  default: true,
})

export const EXPLORER_DATEPICKER_HELPERS = [getDefaultHelper()]
