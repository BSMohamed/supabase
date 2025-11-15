// Stub file: Support was removed in cleanup
// This file provides storage client to prevent build errors

export const supportStorageClient = {
  upload: () => Promise.resolve({ data: null, error: null }),
  download: () => Promise.resolve({ data: null, error: null }),
}

export default supportStorageClient
