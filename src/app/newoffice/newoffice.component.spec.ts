import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewofficeComponent } from './newoffice.component';

describe('NewofficeComponent', () => {
  let component: NewofficeComponent;
  let fixture: ComponentFixture<NewofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
