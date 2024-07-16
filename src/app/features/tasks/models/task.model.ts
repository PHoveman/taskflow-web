import { BaseEntity } from "@core/models/base-entity.model";
import { SubTaskModel } from "./sub-task.model";

export class TaskModel extends BaseEntity {
  title!: string

  notes?: string

  dateDue?: Date

  priority!: 1 | 2 | 3

  subTasks!: SubTaskModel[]
}