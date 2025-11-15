// Stub file: Storage was removed in cleanup
// This file provides utilities to prevent build errors

export const formatFileSize = (size: number) => `${size} bytes`

export const getFileType = (filename: string) => 'file'

export const parseStoragePath = (path: string) => path

export const calculateTotalRemainingTime = (files: any[]) => 0

export const formatTime = (seconds: number) => `${seconds}s`

export const downloadFile = (url: string, filename: string) => {
  console.warn('Storage functionality has been removed')
}

export const EMPTY_FOLDER_PLACEHOLDER_FILE_NAME = '.emptyFolderPlaceholder'

export const formatFolderItems = (items: any[]) => items

export const getFilesDataTransferItems = (dataTransfer: DataTransfer) => []
