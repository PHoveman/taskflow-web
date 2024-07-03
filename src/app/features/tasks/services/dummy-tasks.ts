import { WritableSignal, signal } from "@angular/core";
import { TaskModel } from "../models/task.model";
import { TaskStatusEnum } from "@features/enums/task-status.enum";

export const DUMMY_TASKS: WritableSignal<TaskModel[]> = signal([
  { 
    id: 'dokdfok20kf02k0j9',
    title: 'Editing',
    notes: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n\nVeniam quibusdam animi atque eaque! Perspiciatis ducimus fugiat amet eos quae eum eligendi, tempora id incidunt earum perferendis dolor cum vero adipisci? Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n\nVeniam quibusdam animi atque eaque! Perspiciatis ducimus fugiat amet eos quae eum eligendi, tempora id incidunt earum perferendis dolor cum vero adipisci? Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n\nVeniam quibusdam animi atque eaque! Perspiciatis ducimus fugiat amet eos quae eum eligendi, tempora id incidunt earum perferendis dolor cum vero adipisci?',
    status: TaskStatusEnum.Pending,
    isOpen: true,
    subTasks: [
      { id: 'eojowkvowjiji', title: 'Make notes for shoot', isCompleted: true },
      { id: 'f2f9if92if92if92', title: 'Audio for Mumma', isCompleted: true },
      { id: '9fj2f9u29g0i09', title: 'Soudcheck', isCompleted: false },
      { id: '2f9u29fu3g89u8hj8', title: 'Subtitles', isCompleted: false },
      { id: '0fk0c9vjv9j9j', title: 'Give Pad a coffee', isCompleted: false },
      { id: '9f920v9jv893j9', title: 'Do work in coffee shop for 5 mins', isCompleted: false },
      { id: 'o29jf928vjhh8', title: 'Work at red lights on editing', isCompleted: false }
    ]
  },
  { 
    id: '20ri9ig39ug39ug',
    title: 'Sort out house',
    notes: 'Sale move in',
    status: TaskStatusEnum.Pending,
    isOpen: false,
    subTasks: []
  },
  { 
    id: '29if29u882yh87h',
    title: 'Bum',
    notes: 'Sale move in',
    status: TaskStatusEnum.Completed,
    isOpen: false,
    subTasks: [
      { id: 'fo9j39fj3g8h8h8', title: 'Do this', isCompleted: true }
    ]
  },
])