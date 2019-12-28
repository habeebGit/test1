import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureIAMPortalComponent } from './azure-iamportal.component';

describe('AzureIAMPortalComponent', () => {
  let component: AzureIAMPortalComponent;
  let fixture: ComponentFixture<AzureIAMPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureIAMPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureIAMPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
