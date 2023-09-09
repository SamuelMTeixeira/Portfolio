import { NextResponse } from 'next/server'
import { ResumeDatabase } from '@/features/resumes'
import IResume from '@/interfaces/IResume'

export async function GET() {
  const notionToken = process.env.NOTION_TOKEN
  const databaseID = process.env.NOTION_CV_DATABASE_ID

  if (!notionToken) throw Error('Missing Notion database ID')
  if (!databaseID) throw Error('Missing Notion database ID')

  const resumeDatabase = new ResumeDatabase(notionToken)

  const rows = await resumeDatabase.queryDatabase(databaseID)

  const data: Array<IResume> = rows.map((line) => ({
    name: line.name.title[0].plain_text,
    pdf: line.pdf.files[0].file.url,
  }))

  return NextResponse.json(data, { status: 200 })
}
