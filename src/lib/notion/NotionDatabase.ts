import IDatabase from '@/interfaces/IDatabase'
import { Client } from '@notionhq/client'

class NotionDatabase<T> implements IDatabase<T> {
  private readonly notionClient: Client

  constructor(notionToken: string) {
    this.notionClient = new Client({
      auth: notionToken,
    })
  }

  async queryDatabase(
    databaseId: string,
    sorts?: Array<
      | {
          property: string
          direction: 'ascending' | 'descending'
        }
      | {
          timestamp: 'created_time' | 'last_edited_time'
          direction: 'ascending' | 'descending'
        }
    >,
  ): Promise<T[]> {
    try {
      const query = await this.notionClient.databases.query({
        database_id: databaseId,
        sorts,
      })

      if (!query || !query.results) {
        throw new Error(
          'Invalid parameters in the request. Please check if the database fields exist.',
        )
      }

      const rows = query.results.map((line) => {
        if ('properties' in line) {
          return line.properties
        } else return line
      }) as T[]
      return rows
    } catch (error) {
      // Lida com erros de consulta do Notion
      throw new Error('Failed to query Notion database')
    }
  }
}

export default NotionDatabase
