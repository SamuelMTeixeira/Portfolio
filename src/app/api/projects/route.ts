import { NextResponse } from 'next/server'
import IProject from '@/interfaces/IProject'
import { ProjectsDatabase } from '@/features/projects'

export async function GET() {
  const notionToken = process.env.NOTION_TOKEN
  const databaseID = process.env.NOTION_PROJECTS_DATABASE_ID

  if (!notionToken) throw Error('Missing Notion database ID')
  if (!databaseID) throw Error('Missing Notion database ID')

  const projectDatabase = new ProjectsDatabase(notionToken)

  const rows = await projectDatabase.queryDatabase(databaseID)

  const data: Array<IProject> = rows.map((line) => ({
    name: line.name.title[0].plain_text,
    description: line.description.rich_text[0].plain_text,
    image: line.image.files[0].file.url,
    preview: line.preview.url,
    repo: line.repo.url,
  }))

  return NextResponse.json(data, { status: 200 })
}
