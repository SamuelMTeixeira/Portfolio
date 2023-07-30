export default interface IDatabase<T> {
  queryDatabase(databaseId: string): Promise<T[]>
}
