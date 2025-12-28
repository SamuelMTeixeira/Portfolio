import {getProjects} from '@/services/projects'
import { useSuspenseQuery } from '@tanstack/react-query'

export default function useProject() {
  const { data: projects, ...params } = useSuspenseQuery({
    queryKey: ['project'],
    queryFn: () => getProjects(),
  })

  return { projects, ...params }
}
