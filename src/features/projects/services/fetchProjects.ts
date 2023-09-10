import IProject from '@/interfaces/IProject'

export async function fetchProjects() {
  const response = await fetch('/api/projects', {
    next: {
      revalidate: 1,
    },
    cache: 'no-store'
  })
  const projects: Array<IProject> = await response.json()
  return projects
}
