import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyvenLayoutLibComponent } from './syven-layout-lib.component';

describe('SyvenLayoutLibComponent', () => {
  let component: SyvenLayoutLibComponent;
  let fixture: ComponentFixture<SyvenLayoutLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyvenLayoutLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyvenLayoutLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
