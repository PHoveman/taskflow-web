import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { SubTaskModel } from '../models/sub-task.model';

@Pipe({
  name: 'taskCompletionCalc',
  standalone: true,
  pure: false
})
export class TaskCompletionCalcPipe implements PipeTransform {

  transform(value: SubTaskModel[] | undefined): number {
    if (!value) return 0

    const amountCompleted = value.filter(subTask => !!subTask.isCompleted).length
    const amount = value.length

    return (amountCompleted / amount) * 100
  }
}
