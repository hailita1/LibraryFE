import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReaderComponent } from './item-reader.component';

describe('ItemReaderComponent', () => {
  let component: ItemReaderComponent;
  let fixture: ComponentFixture<ItemReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
