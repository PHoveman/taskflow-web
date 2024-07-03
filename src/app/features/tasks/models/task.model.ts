import { BaseEntity } from "@core/models/base-entity.model";
import { TaskStatusEnum } from "@features/enums/task-status.enum";
import { SubTaskModel } from "./sub-task.model";

export class TaskModel extends BaseEntity {
    title!: string

    notes?: string

    status!: TaskStatusEnum

    subTasks!: SubTaskModel[]

    isOpen?: boolean
}