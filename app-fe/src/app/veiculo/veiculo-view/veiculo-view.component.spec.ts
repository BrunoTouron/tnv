import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoViewComponent } from './veiculo-view.component';

describe('VeiculoViewComponent', () => {
  let component: VeiculoViewComponent;
  let fixture: ComponentFixture<VeiculoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
