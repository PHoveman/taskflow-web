import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTDProgressComponent } from './task-td-progress.component';

describe('TaskTDProgressComponent', () => {
  let component: TaskTDProgressComponent
  let fixture: ComponentFixture<TaskTDProgressComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTDProgressComponent]
    })
    .compileComponents()
    
    fixture = TestBed.createComponent(TaskTDProgressComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
