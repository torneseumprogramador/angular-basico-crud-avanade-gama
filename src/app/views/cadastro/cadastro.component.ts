import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { BuilderClass } from '../../Service/builderClass'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private routeParams:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.idMostrar = this.routeParams.snapshot.params.id
    this.cliente = new Cliente()
    this.todos()
  }

  async todos() {
    this.clientes = await this.cliente.todos(this.http)
  }


  idMostrar:number
  clientes:Cliente[]
  cliente:Cliente

  salvar(){
    this.cliente.salvar(this.http);
    this.cliente = new Cliente();
  }

  editar(cliente:Cliente){
    BuilderClass.builder(this.cliente, cliente)
  }

  redirectHome(){
    this.router.navigateByUrl("/")
  }

}
