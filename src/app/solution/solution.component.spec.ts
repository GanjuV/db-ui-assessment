import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SolutionComponent } from './solution.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';

describe('SolutionComponent', () => {
  let component: SolutionComponent;
  let fixture: ComponentFixture<SolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionComponent ],
      imports: [ FormsModule ],
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
    component.formGroup.controls.searchVal.setValue(searchVal);
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
    expect(component.outPut).toEqual('Number can not be more than 3999');
  });

  it('should get error not a valid number', () => {
    const el: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    el.value = 'qweqweqwe';
    el.dispatchEvent(new Event('input'));
    expect(component.outPut).toBe('Enter number only');
  });

  it('should get error less than 3999', () => {
    const el: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    el.value = '456607';
    el.dispatchEvent(new Event('input'));
    expect(component.outPut).toBe('Number can not be more than 3999');
  });

  it('should get roman number', () => {
    const el: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    el.value = '435';
    el.dispatchEvent(new Event('input'));
    expect(component.outPut).toBe('CDLIII');
  });

});
