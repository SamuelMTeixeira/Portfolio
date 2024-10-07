import { ProjectProps } from '@/services/projects'
import { Client } from '@notionhq/client'
import { NextResponse } from 'next/server'

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

  const data: ProjectProps[] = database.results.map((project: any) => {
    const { name, description, image, preview, repo, category, tags } =
      project.properties
    return {
      title: name.title[0].plain_text,
      description: description.rich_text[0].plain_text,
      category: category.rich_text[0].plain_text,
      imageUrl: image.files[0].file.url,
      previewUrl: preview.url,
      sourceUrl: repo.url,
      tags: tags.multi_select.map((tag: any) => tag.name),
    }
  })

  return NextResponse.json({ data }, { status: 200 })
}
