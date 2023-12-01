import { ComponentFixture, TestBed } from '@angular/core/testing';
import { viajesComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: viajesComponent;
  let fixture: ComponentFixture<viajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [viajesComponent]
    });
    fixture = TestBed.createComponent(viajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
