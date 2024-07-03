import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTDStatusComponent } from './task-td-status.component';

describe('TaskTDStatusComponent', () => {
  let component: TaskTDStatusComponent
  let fixture: ComponentFixture<TaskTDStatusComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTDStatusComponent]
    })
    .compileComponents()
    
    fixture = TestBed.createComponent(TaskTDStatusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
