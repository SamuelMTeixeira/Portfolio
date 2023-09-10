import IResume from '@/interfaces/IResume'

export async function fetchResumes() {
  const response = await fetch('/api/resume', {
    next: {
      revalidate: 1,
    },
    cache: 'no-store',
    method: 'POST',
  })
  const resumes: Array<IResume> = await response.json()
  return resumes
}
