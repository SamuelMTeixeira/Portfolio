import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import IProject from '@/interfaces/IProject';

type Row = {
    description: {
        id: string,
        rich_text: [{
            plain_text: string,
        }],
    }
    name: {
        id: string,
        title: [{
            plain_text: string,
            href: null
        }]
    },
    image: {
        id: string,
        files: [{
            file: {
                url: string,
                expiry_time: string
            }
        }]
    },
    preview: {
        url: string | undefined
    },
    repo: {
        url: string | undefined
    }
}

function createNotionClient(): Client {
    const token = process.env.NOTION_TOKEN

    const notion = new Client({
        auth: token
    })

    return notion
}

export async function GET() {
    const notionClient = createNotionClient()

    if (!notionClient) throw Error("Notion client instance is required");

    if (!process.env.NOTION_DATABASE_ID) throw Error("Missing Notion database ID");

    const query = await notionClient.databases.query({
        database_id: process.env.NOTION_DATABASE_ID
    })

    if (!query)
        return NextResponse.json({ error: "Invalid parameters in the request. Please check if the database fields exist" }, { status: 400 })

    // @ts-ignore
    const rows = query.results.map((line) => line.properties) as Row[]

    const data: Array<IProject> = rows.map(line => ({
        name: line.name.title[0].plain_text,
        description: line.description.rich_text[0].plain_text,
        image: line.image.files[0].file.url,
        preview: line.preview.url,
        repo: line.repo.url
    }))

    return NextResponse.json(data, { status: 200 })
}