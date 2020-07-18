import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicGridComponent } from './pic-grid.component';

describe('PicGridComponent', () => {
  let component: PicGridComponent;
  let fixture: ComponentFixture<PicGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
