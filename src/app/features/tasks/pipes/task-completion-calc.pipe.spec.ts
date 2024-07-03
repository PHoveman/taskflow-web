import { SubTaskModel } from '../models/sub-task.model';
import { TaskCompletionCalcPipe } from './task-completion-calc.pipe';

const mockSubTaskArray: SubTaskModel[] = [
  { id: 'mockTest1', title: 'Mock test 1', isCompleted: false },
  { id: 'mockTest2', title: 'Mock test 2', isCompleted: false },
  { id: 'mockTest3', title: 'Mock test 3', isCompleted: false },
  { id: 'mockTest4', title: 'Mock test 4', isCompleted: true },
]

describe('TaskCompletionCalcPipe', () => {
  it('Should create an instance', () => {
    const pipe = new TaskCompletionCalcPipe()
    expect(pipe).toBeTruthy()
  })

  it('Should return the correct percentage based off of completed task matches', () => {
    const pipe = new TaskCompletionCalcPipe()
    const value = pipe.transform(mockSubTaskArray)

    expect(value).toEqual(25)
  })

  it('Should return 0 if no sub task array is found', () => {
    const pipe = new TaskCompletionCalcPipe()
    const value = pipe.transform(undefined)

    expect(value).toEqual(0)
  })
})
