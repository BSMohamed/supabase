import { IS_PLATFORM } from 'common'
import { useProjectLevelTableEditorCommands } from 'components/layouts/TableEditorLayout/TableEditor.Commands'
import { useLayoutNavCommands } from 'components/layouts/useLayoutNavCommands'
import { CommandHeader, CommandInput, CommandList, CommandMenu } from 'ui-patterns/CommandMenu'
import { useChangelogCommand } from 'ui-patterns/CommandMenu/prepackaged/Changelog'
import { useDocsAiCommands } from 'ui-patterns/CommandMenu/prepackaged/DocsAi'
import { useDocsSearchCommands } from 'ui-patterns/CommandMenu/prepackaged/DocsSearch'
import { useThemeSwitcherCommands } from 'ui-patterns/CommandMenu/prepackaged/ThemeSwitcher'
import { useApiUrlCommand } from './ApiUrl'
import { useProjectSwitchCommand, useConfigureOrganizationCommand } from './OrgProjectSwitcher'
import { orderCommandSectionsByPriority } from './ordering'

export default function StudioCommandMenu() {
  useApiUrlCommand()
  useProjectLevelTableEditorCommands()
  useProjectSwitchCommand()
  useConfigureOrganizationCommand()
  useLayoutNavCommands()
  useDocsSearchCommands({
    options: { orderSection: orderCommandSectionsByPriority, sectionMeta: { priority: 3 } },
  })
  useDocsAiCommands({
    options: { orderSection: orderCommandSectionsByPriority, sectionMeta: { priority: 3 } },
  })
  useChangelogCommand({ enabled: IS_PLATFORM })
  useThemeSwitcherCommands()

  // Removed commands: APIKeys, Branches, SQL Editor, Support
  // These were part of deleted features. Add them back if needed.

  return (
    <CommandMenu>
      <CommandHeader>
        <CommandInput />
      </CommandHeader>
      <CommandList />
    </CommandMenu>
  )
}
