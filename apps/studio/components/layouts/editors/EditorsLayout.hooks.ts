// Stub file: Editors layout was removed in cleanup
// This file provides hooks to prevent build errors

export const useEditorsLayout = () => ({
  activeEditor: null,
  setActiveEditor: () => {},
})

export const useEditorState = () => ({
  content: '',
  setContent: () => {},
})

export const useEditorType = () => 'sql'
