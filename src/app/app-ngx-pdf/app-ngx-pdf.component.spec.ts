import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgxPdfComponent } from './app-ngx-pdf.component';

describe('AppNgxPdfComponent', () => {
  let component: AppNgxPdfComponent;
  let fixture: ComponentFixture<AppNgxPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNgxPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgxPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
