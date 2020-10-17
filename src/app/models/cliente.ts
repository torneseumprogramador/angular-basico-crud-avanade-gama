import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export class Cliente{
  public id:number = 0
  public nome:string = ""
  public email:string = ""
  public senha:string = ""

  public async salvar(http:HttpClient){
    if(!this.nome){
      throw "Nome obrigatório"
    }

    if(!this.email){
      throw "Email obrigatório"
    }

    if(this.id > 0){
      const cliente = await http.put<Cliente>(`${environment.uri}/cliente/${this.id}`,this, { headers: new HttpHeaders({authorization: `Bearer ${environment.token}`})}).toPromise()
      return cliente.id
    }

    let cliente = await http.post<Cliente>(`${environment.uri}/cliente`,this, { headers: new HttpHeaders({authorization: `Bearer ${environment.token}`})}).toPromise()
    return cliente.id
  }

  public async todos(http:HttpClient){
    let clientes = await http.get<Cliente[]>(`${environment.uri}/clientes`, { headers: new HttpHeaders({authorization: `Bearer ${environment.token}`})}).toPromise()
    return clientes
  }

  public async get(id:number, http:HttpClient){
    let cliente = await http.get<Cliente>(`${environment.uri}/cliente/${id}`, { headers: new HttpHeaders({authorization: `Bearer ${environment.token}`})}).toPromise()
    return cliente
  }

  public static async excluir(id:number, http:HttpClient){
    await http.delete(`${environment.uri}/cliente/${id}`, { headers: new HttpHeaders({authorization: `Bearer ${environment.token}`})}).toPromise()
  }
}
