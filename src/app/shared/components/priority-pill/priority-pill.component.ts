import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-priority-pill',
  standalone: true,
  imports: [NgClass, UpperCasePipe],
  templateUrl: './priority-pill.component.html',
  styleUrl: './priority-pill.component.scss'
})
export class PriorityPillComponent {
  priorityText = input.required({
    alias: 'priority',
    transform: (priority: 1 | 2 | 3) => {
      switch(priority) {
        case 1: return 'low'
        case 2: return 'medium'
        default: return 'high'
      }
    }
  })
}
