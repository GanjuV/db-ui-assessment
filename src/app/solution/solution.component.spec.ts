import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionComponent } from './solution.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('SolutionComponent', () => {
  let component: SolutionComponent;
  let fixture: ComponentFixture<SolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // create reusable function for a dry spec.
  function updateForm(searchVal) {
    component.myForm.controls.searchVal.setValue(searchVal);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get error not a valid number calling method', () => {
    updateForm('dasdada');
    component.getRomanData();
    expect(component.outPut).toEqual('Enter number only');
  });

  it('should get error less than 3999 calling method', () => {
    updateForm(24242);
    component.getRomanData();
    expect(component.outPut).toEqual('Number can not be greater than 3999');
  });

  it('should get get out put as CXXIII', () => {
    updateForm(123);
    component.getRomanData();
    expect(component.outPut).toEqual('CXXIII');
  });

});
