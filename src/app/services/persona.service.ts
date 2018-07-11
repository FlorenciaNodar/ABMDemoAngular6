import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
@Injectable()
export class PersonaService {
  
  private apiUrl='https://localhost:44300';
  
  constructor(private http:HttpClient) {


   }

    traerUsuarios() {
    return this.http
    .get(this.apiUrl+"/api/v1.0/Personas");

    }

    eliminarUsuario(id){
    return this.http
    .delete(this.apiUrl+"/api/v1.0/Personas/"+id);
    }


    modificarUsuario(user): any{
    return this.http
    .put<any[]>(this.apiUrl+"/api/v1.0/Personas",user)
    .pipe(map(data => data));
    }

    altaUsuario(nombre,apellido, tipo, numero, direccion, correo): any  {
      var param = {"nombre": nombre, "apellido": apellido, "direccion": direccion, "DniNumber": numero, "DniType": tipo, "email": correo};
      return this.http.post<any[]>(this.apiUrl+"/api/v1.0/Personas",param )
        .pipe(map(data => data));
    }

    editarUsuario(id,nombre,apellido, tipo, numero, direccion, correo): any  {
    var param = {"IdUser": id,"Identidad": null,"Nombre": nombre, "Apellido": apellido, "Direccion": direccion, "DniNumber": numero, "DniType": tipo, "Email": correo};
    debugger;
    return this.http.put<any[]>(this.apiUrl+"/api/v1.0/Personas",param )
      .pipe(map(data => data));
    }


    traerUsuarioPorId(id): any  {
    return this.http
    .get(this.apiUrl+"/api/v1.0/Personas/"+id);
    }

}