import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAuthorComponent } from './item-author.component';

describe('ItemAuthorComponent', () => {
  let component: ItemAuthorComponent;
  let fixture: ComponentFixture<ItemAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
