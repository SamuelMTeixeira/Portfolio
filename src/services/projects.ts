export interface ProjectProps {
  title: string
  description: string
  imageUrl: string
  sourceUrl?: string
  previewUrl?: string
  category: string
  tags: string[]
}

export async function getProjects(): Promise<ProjectProps[]> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return new Promise((resolve, reject) => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, options)
      .then((response) => response.json())
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}
