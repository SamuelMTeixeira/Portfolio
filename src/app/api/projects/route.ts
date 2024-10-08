import { ProjectProps } from '@/services/projects'
import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NextResponse } from 'next/server'

type NotionProperty = {
  title: { plain_text: string }[]
  rich_text: { plain_text: string }[]
  files: { file: { url: string } }[]
  url: string
  multi_select: { name: string }[]
}

type NotionProjectProperties = {
  name: NotionProperty
  description: NotionProperty
  image: NotionProperty
  preview: NotionProperty
  repo: NotionProperty
  category: NotionProperty
  tags: NotionProperty
}

function isNotionProject(
  project: PageObjectResponse,
): project is PageObjectResponse & { properties: NotionProjectProperties } {
  return (
    'name' in project.properties &&
    'description' in project.properties &&
    'image' in project.properties &&
    'preview' in project.properties &&
    'repo' in project.properties &&
    'category' in project.properties &&
    'tags' in project.properties
  )
}

export async function POST() {
  const notionToken = process.env.NOTION_TOKEN
  const databaseID = process.env.NOTION_PROJECTS_DATABASE_ID

  if (!notionToken || !databaseID)
    return NextResponse.json(
      { message: 'Missing Notion database ID' },
      { status: 401 },
    )

  const database = await new Client({ auth: notionToken }).databases.query({
    database_id: databaseID,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  })

  const data: ProjectProps[] = database.results
    .filter((project): project is PageObjectResponse => 'properties' in project)
    .filter(isNotionProject)
    .map((project) => {
      const { name, description, image, preview, repo, category, tags } =
        project.properties
      return {
        title: name.title[0].plain_text,
        description: description.rich_text[0].plain_text,
        category: category.rich_text[0].plain_text,
        imageUrl: image.files[0].file.url,
        previewUrl: preview.url,
        sourceUrl: repo.url,
        tags: tags.multi_select.map((tag) => tag.name),
      }
    })

  return NextResponse.json({ data }, { status: 200 })
}
