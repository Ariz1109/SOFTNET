import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDetUsuarioEmpresaComponent } from './edit.component';



describe('EditDetUsuarioEmpresaComponent', () => {
  let component: EditDetUsuarioEmpresaComponent;
  let fixture: ComponentFixture<EditDetUsuarioEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetUsuarioEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDetUsuarioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
