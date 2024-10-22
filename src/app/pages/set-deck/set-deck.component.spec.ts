import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDeckComponent } from './set-deck.component';

describe('SetDeckComponent', () => {
  let component: SetDeckComponent;
  let fixture: ComponentFixture<SetDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetDeckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
