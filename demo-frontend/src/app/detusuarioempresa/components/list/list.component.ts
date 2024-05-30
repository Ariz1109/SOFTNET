import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DetusuarioempresaService } from 'src/app/services/detusuarioempresa.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['codEmpresa', 'codUsuario', 'varNombres', 'varApellidos', 'varDocIdentidad', 'varCargo', 'varCorreo', 'varNomImagen', 'actions'];
  detUsuarioEmpresaDataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(
    private detUsuarioEmpresaService: DetusuarioempresaService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDetUsuariosEmpresa();
  }

  getDetUsuariosEmpresa(): void {
    this.detUsuarioEmpresaService.getAll().subscribe(listDetUsuariosEmpresa => {
      console.log('Data received from API:', listDetUsuariosEmpresa);
      this.detUsuarioEmpresaDataSource.data = listDetUsuariosEmpresa.filter((usuario: any) => usuario.intFlgEliminado == 0);;
    });
  }

  editarDetUsuarioEmpresa(detUsuarioEmpresa: any): void {
    this.router.navigate(['./edit', detUsuarioEmpresa.codEmpresa, detUsuarioEmpresa.codUsuario], {
      relativeTo: this.activateRoute
    });
  }

  eliminarDetUsuarioEmpresa(detUsuarioEmpresa: any): void {
    if (confirm(`¿Está seguro de que desea eliminar a ${detUsuarioEmpresa.varCorreo}?`)) {
      this.detUsuarioEmpresaService.delete(detUsuarioEmpresa.codEmpresa, detUsuarioEmpresa.codUsuario).subscribe(response => {
        alert('Usuario eliminado correctamente');
        this.getDetUsuariosEmpresa(); // Refrescar la lista después de la eliminación
      }, error => {
        alert('Ocurrió un error al eliminar el usuario');
      });
    }
  }

  agregarDetUsuarioEmpresa(): void {
    this.router.navigate(['./create'], {
      relativeTo: this.activateRoute
    });
  }
}
