import { TestBed } from '@angular/core/testing';
import { MaeusaurioService } from './maeusuario.service';



describe('MaeusuarioService', () => {
  let service: MaeusaurioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaeusaurioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
