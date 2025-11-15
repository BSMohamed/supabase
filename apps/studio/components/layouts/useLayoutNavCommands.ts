import { useIsLoggedIn } from 'common'
import { useDatabaseGotoCommands } from './DatabaseLayout/Database.Commands'
import { useTableEditorGotoCommands } from './TableEditorLayout/TableEditor.Commands'

export function useLayoutNavCommands() {
  const isLoggedIn = useIsLoggedIn()

  useTableEditorGotoCommands({ enabled: isLoggedIn })
  useDatabaseGotoCommands({ enabled: isLoggedIn })

  // Other layout commands (SQL Editor, Auth, Storage, Functions, Reports, etc.)
  // have been removed in the cleanup. Add them back if needed.
}
