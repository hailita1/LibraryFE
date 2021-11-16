import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReaderComponent } from './list-reader.component';

describe('ListReaderComponent', () => {
  let component: ListReaderComponent;
  let fixture: ComponentFixture<ListReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
