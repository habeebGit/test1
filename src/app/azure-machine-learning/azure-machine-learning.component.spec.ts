import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureMachineLearningComponent } from './azure-machine-learning.component';

describe('AzureMachineLearningComponent', () => {
  let component: AzureMachineLearningComponent;
  let fixture: ComponentFixture<AzureMachineLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureMachineLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureMachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
