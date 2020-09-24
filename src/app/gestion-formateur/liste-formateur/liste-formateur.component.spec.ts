import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormateurComponent } from './liste-formateur.component';

describe('ListeFormateurComponent', () => {
  let component: ListeFormateurComponent;
  let fixture: ComponentFixture<ListeFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
