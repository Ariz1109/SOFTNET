import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MaeusaurioService } from 'src/app/services/maeusuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['codUsuario', 'varNombres', 'varApellidos', 'varDocIdentidad', 'varNumTelefono', 'actions'];
  usuarioDataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(
    private usuarioService: MaeusaurioService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getAll().subscribe(listUsuarios => {
      console.log('Data received from API:', listUsuarios);  // Agregar este console.log para inspeccionar los datos
      this.usuarioDataSource.data = listUsuarios.filter((usuario: any) => usuario.intFlgEliminado == 0);
    });
  }

  editarUsuario(usuario: any): void {
    this.router.navigate(['./edit', usuario.codUsuario], {
      relativeTo: this.activateRoute
    });
  }

  eliminarUsuario(usuario: any): void {
    if (confirm(`¿Está seguro de que desea eliminar al usuario: ${usuario.varNombres} ${usuario.varApellidos}?`)) {
      this.usuarioService.delete(usuario.codUsuario).subscribe(() => {
        alert('Usuario eliminado correctamente');
        this.getUsuarios();
      }, error => {
        alert('Ocurrió un error al eliminar el usuario');
      });
    }
  }

  agregarUsuario(): void {
    this.router.navigate(['./create'], {
      relativeTo: this.activateRoute
    });
  }
}
