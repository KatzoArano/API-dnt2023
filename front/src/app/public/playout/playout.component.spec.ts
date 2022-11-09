import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoutComponent } from './playout.component';

describe('PlayoutComponent', () => {
  let component: PlayoutComponent;
  let fixture: ComponentFixture<PlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
