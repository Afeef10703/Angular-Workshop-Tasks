import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocontactComponent } from './addtocontact.component';

describe('AddtocontactComponent', () => {
  let component: AddtocontactComponent;
  let fixture: ComponentFixture<AddtocontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtocontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtocontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
