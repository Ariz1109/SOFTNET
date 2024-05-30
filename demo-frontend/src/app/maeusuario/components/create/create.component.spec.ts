import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMaeUsuarioComponent } from './create.component';



describe('CreateMaeUsuarioComponent', () => {
  let component: CreateMaeUsuarioComponent;
  let fixture: ComponentFixture<CreateMaeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMaeUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMaeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
