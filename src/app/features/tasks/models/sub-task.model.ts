import { BaseEntity } from "@core/models/base-entity.model";

export class SubTaskModel extends BaseEntity {
  title!: string

  isCompleted!: boolean
}