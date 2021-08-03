import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUtilisateurComponent } from './table-utilisateur.component';

describe('TableUtilisateurComponent', () => {
  let component: TableUtilisateurComponent;
  let fixture: ComponentFixture<TableUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
