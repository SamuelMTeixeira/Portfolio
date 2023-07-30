import NotionDatabase from '@/lib/notion/NotionDatabase'
import ProjectProps from '../types/ProjectProps'

export default class ProjectsDatabase extends NotionDatabase<ProjectProps> {
  async queryDatabase(databaseId: string): Promise<ProjectProps[]> {
    return await super.queryDatabase(databaseId)
  }
}