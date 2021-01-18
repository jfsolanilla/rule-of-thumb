import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityHeaderComponent } from './celebrity-header.component';

describe('CelebrityHeaderComponent', () => {
  let component: CelebrityHeaderComponent;
  let fixture: ComponentFixture<CelebrityHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrityHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
