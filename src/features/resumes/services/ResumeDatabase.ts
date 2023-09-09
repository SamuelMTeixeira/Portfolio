import NotionDatabase from '@/lib/notion/NotionDatabase'
import ResumeProps from '../types/ResumeProps'

export default class ResumeDatabase extends NotionDatabase<ResumeProps> {
  async queryDatabase(databaseId: string): Promise<ResumeProps[]> {
    return await super.queryDatabase(databaseId)
  }
}
