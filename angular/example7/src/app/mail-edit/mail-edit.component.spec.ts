import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailEditComponent } from './mail-edit.component';

describe('MailEditComponent', () => {
  let component: MailEditComponent;
  let fixture: ComponentFixture<MailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
