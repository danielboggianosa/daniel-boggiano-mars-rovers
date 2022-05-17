import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rover } from 'src/app/core/models/Rover';
import { NasaService } from 'src/app/core/services/nasa.service';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NasaService],
      declarations: [SearchFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid form', () => {
    expect(component.searchForm.valid).toBeFalsy();
  });

  it('should return valid form when valid parameters are passed', () => {
    component.searchForm.controls['rover'].setValue('Curiosity');
    expect(component.searchForm.valid).toBeTruthy();
  });

  it('should return invalid form when invalid parameters are passed', () => {
    component.searchForm.controls['rover'].setValue('Curiosity');
    component.searchForm.controls['sol'].setValue('-1');
    expect(component.searchForm.valid).toBeFalsy();
  });

  it('shuld show spinner when form is submitted', () => {
    component.searchForm.controls['rover'].setValue('Curiosity');
    component.onSubmit();
    expect(component.loading).toBeTruthy();
  });

  

});
