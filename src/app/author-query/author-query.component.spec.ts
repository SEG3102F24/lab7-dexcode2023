import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorQueryComponent } from './author-query.component';

describe('AuthorQueryComponent', () => {
  let component: AuthorQueryComponent;
  let fixture: ComponentFixture<AuthorQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
