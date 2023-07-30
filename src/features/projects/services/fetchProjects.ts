import IProject from '@/interfaces/IProject'

export async function fetchProjects() {
  const response = await fetch('/api/projects')
  const projects: Array<IProject> = await response.json()
  return projects
}
