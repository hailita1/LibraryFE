import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPublishingCompanyComponent } from './item-publishing-company.component';

describe('ItemPublishingCompanyComponent', () => {
  let component: ItemPublishingCompanyComponent;
  let fixture: ComponentFixture<ItemPublishingCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPublishingCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPublishingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
