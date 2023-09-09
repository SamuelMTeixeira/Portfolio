import IResume from '@/interfaces/IResume'

export async function fetchResumes() {
  const response = await fetch('/api/resume')
  const resumes: Array<IResume> = await response.json()
  return resumes
}
