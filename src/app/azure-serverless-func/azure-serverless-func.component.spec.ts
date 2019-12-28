import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureServerlessFuncComponent } from './azure-serverless-func.component';

describe('AzureServerlessFuncComponent', () => {
  let component: AzureServerlessFuncComponent;
  let fixture: ComponentFixture<AzureServerlessFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureServerlessFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureServerlessFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
