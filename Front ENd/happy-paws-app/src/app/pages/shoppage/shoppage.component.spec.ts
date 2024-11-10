import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppageComponent } from './shoppage.component';

describe('ShoppageComponent', () => {
  let component: ShoppageComponent;
  let fixture: ComponentFixture<ShoppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
