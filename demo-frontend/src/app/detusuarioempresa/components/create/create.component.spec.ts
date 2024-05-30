import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDetUsuarioEmpresaComponent } from './create.component';


describe('CreateDetUsuarioEmpresaComponent', () => {
  let component: CreateDetUsuarioEmpresaComponent;
  let fixture: ComponentFixture<CreateDetUsuarioEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDetUsuarioEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDetUsuarioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
