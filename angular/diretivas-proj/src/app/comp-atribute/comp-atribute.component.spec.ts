import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAtributeComponent } from './comp-atribute.component';

describe('CompAtributeComponent', () => {
  let component: CompAtributeComponent;
  let fixture: ComponentFixture<CompAtributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAtributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAtributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
