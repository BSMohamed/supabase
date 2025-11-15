// Stub file: Storage was removed in cleanup
// This file provides utilities to prevent build errors

export const validateStorageSettings = () => true

export const getDefaultStorageSettings = () => ({})

export const formatStorageConfig = (config: any) => config

export const convertFromBytes = (bytes: number) => ({
  value: bytes,
  unit: 'bytes',
})
