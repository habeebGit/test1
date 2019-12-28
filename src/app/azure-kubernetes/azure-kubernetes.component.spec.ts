import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureKubernetesComponent } from './azure-kubernetes.component';

describe('AzureKubernetesComponent', () => {
  let component: AzureKubernetesComponent;
  let fixture: ComponentFixture<AzureKubernetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureKubernetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureKubernetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
