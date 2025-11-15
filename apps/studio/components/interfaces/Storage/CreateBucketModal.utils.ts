// Stub file: Storage was removed in cleanup
// This file provides utilities to prevent build errors

export const validateBucketName = (name: string) => true

export const getBucketConfig = () => ({})

export const formatBucketName = (name: string) => name

export const validObjectKeyRegex = /^[a-zA-Z0-9_\-./]+$/
export const inverseValidObjectKeyRegex = /[^a-zA-Z0-9_\-./]/g
