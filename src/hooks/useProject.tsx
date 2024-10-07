import getProjects from '@/services/projects'
import { useQuery } from '@tanstack/react-query'

export default function useProject() {
  const params = useQuery({
    queryKey: ['project'],
    queryFn: () => getProjects(),
  })

  return params
}
