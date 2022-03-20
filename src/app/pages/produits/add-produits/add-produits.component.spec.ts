import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProduitsComponent } from './add-produits.component';

describe('AddProduitsComponent', () => {
  let component: AddProduitsComponent;
  let fixture: ComponentFixture<AddProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
