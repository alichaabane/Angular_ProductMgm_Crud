import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProduitsComponent } from './update-produits.component';

describe('UpdateProduitsComponent', () => {
  let component: UpdateProduitsComponent;
  let fixture: ComponentFixture<UpdateProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
