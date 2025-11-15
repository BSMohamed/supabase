import type { ProductMenuGroup } from 'components/ui/ProductMenu/ProductMenu.types'
import type { Project } from 'data/projects/project-detail-query'

export const generateDatabaseMenu = (
  project?: Project,
  flags?: {}
): ProductMenuGroup[] => {
  const ref = project?.ref ?? 'default'

  return [
    {
      title: 'Database Management',
      items: [
        { name: 'Tables', key: 'tables', url: `/project/${ref}/database/tables`, items: [] },
        // Other database pages (Schema Visualizer, Functions, Triggers, Extensions, etc.)
        // have been removed in this cleaned-up version. Add them back if needed.
      ],
    },
  ]
}
