export type BoardDataObj = {
  id: string,
  title: string, priority: 1 | 2 | 3
}

export type BoardColumn = {
  id: string,
  title: string, data: BoardDataObj[]
}
