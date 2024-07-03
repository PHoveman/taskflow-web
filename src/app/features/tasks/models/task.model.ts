import { BaseEntity } from "@core/models/base-entity.model";
import { TaskPriorityEnum } from "@features/tasks/enums/task-status.enum";
import { SubTaskModel } from "./sub-task.model";

export class TaskModel extends BaseEntity {
  title!: string

  notes?: string

  priority!: TaskPriorityEnum

  subTasks!: SubTaskModel[]
}