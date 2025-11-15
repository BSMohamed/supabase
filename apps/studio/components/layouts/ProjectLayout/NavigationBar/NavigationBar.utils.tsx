import { ICON_SIZE, ICON_STROKE_WIDTH } from 'components/interfaces/Sidebar'
import { generateDatabaseMenu } from 'components/layouts/DatabaseLayout/DatabaseMenu.utils'
import type { Route } from 'components/ui/ui.types'
import type { Project } from 'data/projects/project-detail-query'
import {
  Database,
  TableEditor,
} from 'icons'
import { PROJECT_STATUS } from 'lib/constants'

export const generateToolRoutes = (ref?: string, project?: Project, features?: {}): Route[] => {
  const isProjectBuilding = project?.status === PROJECT_STATUS.COMING_UP
  const buildingUrl = `/project/${ref}`

  return [
    {
      key: 'editor',
      label: 'Table Editor',
      icon: <TableEditor size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />,
      link: ref && (isProjectBuilding ? buildingUrl : `/project/${ref}/database/tables`),
    },
  ]
}

export const generateProductRoutes = (
  ref?: string,
  project?: Project,
  features?: {}
): Route[] => {
  const isProjectBuilding = project?.status === PROJECT_STATUS.COMING_UP
  const buildingUrl = `/project/${ref}`

  const databaseMenu = generateDatabaseMenu(project)

  return [
    {
      key: 'database',
      label: 'Database',
      icon: <Database size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />,
      link: ref && (isProjectBuilding ? buildingUrl : `/project/${ref}/database`),
      items: databaseMenu,
    },
  ]
}

export const generateOtherRoutes = (
  ref?: string,
  project?: Project,
  features?: {}
): Route[] => {
  // All other routes (Advisors, Reports, Logs, API Docs, Integrations) have been removed
  // in this cleaned-up version. Add them back if needed.
  return []
}

export const generateSettingsRoutes = (ref?: string, project?: Project): Route[] => {
  // Settings routes have been removed in this cleaned-up version.
  // Add them back if needed.
  return []
}
