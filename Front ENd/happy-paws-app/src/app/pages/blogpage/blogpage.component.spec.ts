import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpageComponent } from './blogpage.component';

describe('BlogpageComponent', () => {
  let component: BlogpageComponent;
  let fixture: ComponentFixture<BlogpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
