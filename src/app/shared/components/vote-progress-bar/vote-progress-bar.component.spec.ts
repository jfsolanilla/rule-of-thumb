import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteProgressBarComponent } from './vote-progress-bar.component';

describe('VoteProgressBarComponent', () => {
  let component: VoteProgressBarComponent;
  let fixture: ComponentFixture<VoteProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
