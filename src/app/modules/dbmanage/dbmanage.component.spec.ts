import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBManageComponent } from './dbmanage.component';

describe('DashboardComponent', () => {
  let component: DBManageComponent;
  let fixture: ComponentFixture<DBManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
