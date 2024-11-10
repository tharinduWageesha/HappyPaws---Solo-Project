import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetpageComponent } from './petpage.component';

describe('PetpageComponent', () => {
  let component: PetpageComponent;
  let fixture: ComponentFixture<PetpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
