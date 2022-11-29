import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookQuickViewComponent } from './book-quick-view.component';

describe('BookQuickViewComponent', () => {
  let component: BookQuickViewComponent;
  let fixture: ComponentFixture<BookQuickViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookQuickViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
