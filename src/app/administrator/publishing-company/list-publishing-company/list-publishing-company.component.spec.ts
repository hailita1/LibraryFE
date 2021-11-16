import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublishingCompanyComponent } from './list-publishing-company.component';

describe('ListPublishingCompanyComponent', () => {
  let component: ListPublishingCompanyComponent;
  let fixture: ComponentFixture<ListPublishingCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPublishingCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublishingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
