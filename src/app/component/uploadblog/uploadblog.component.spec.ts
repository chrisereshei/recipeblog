import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadblogComponent } from './uploadblog.component';

describe('UploadblogComponent', () => {
  let component: UploadblogComponent;
  let fixture: ComponentFixture<UploadblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
