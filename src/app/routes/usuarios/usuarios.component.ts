import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef, Directive, Input  } from '@angular/core';
import { debounce } from 'rxjs/internal/operators/debounce';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { PersonaService } from '../../services/persona.service';
import swal from'sweetalert2';


@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

    private unarray :any;
    private restItems :any;
    private persona =[];

    private nombre: any;
    private apellido: any;
    private correo: any;
    private numero: any;
    private tipo: any;
    private direccion: any;
    private id: any;
    agregar:any;
    private cambio: boolean;
    
    constructor(fb: FormBuilder, private PersonaS: PersonaService) { }

    ngOnInit() {
        this.agregar = "Agregar"
        this.cambio = false;
        this.traerUsuarios();
    }

    traerUsuarios(){
        this.PersonaS.traerUsuarios()
        .subscribe(
          restItems => {
            this.unarray = restItems;
          }
        )
    }

    eliminar(user){
        this.PersonaS.eliminarUsuario(user.idUser)
        .subscribe(
          restItems => {
            swal("Se elimnó con éxito")            
            this.traerUsuarios();
          }
        )
    }

    
  altaUsuario()  {
    if(!this.cambio){
      this.PersonaS.altaUsuario(this.nombre,this.apellido,this.tipo,this.numero,this.direccion,this.correo)
      .subscribe(
       restItems => {
         swal("Se agregó con éxito")
         this.nombre="",this.apellido="",this.tipo="",this.numero="",this.direccion="",this.correo=""
         this.traerUsuarios();
     }
     )
    }else{
      this.PersonaS.editarUsuario(this.id,this.nombre,this.apellido,this.tipo,this.numero,this.direccion,this.correo).
      subscribe(
        restItems => {
          swal("Se editó con éxito")
          this.nombre="",this.apellido="",this.tipo="",this.numero="",this.direccion="",this.correo=""
          this.traerUsuarios();
          this.cambio= false;
          this.agregar = "Agregar"    
          
        }
      )
    }



    
  }  

  editar(user){
    this.agregar = "Editar"    
    this.cambio = true;
    this.PersonaS.traerUsuarioPorId(user.idUser).
    subscribe(
      restItem => {
        this.nombre =restItem.nombre;
        this.apellido = restItem.apellido;
        this.correo = restItem.email;
        this.direccion = restItem.direccion;
        this.tipo = restItem.dniType;
        this.numero = restItem.dniNumber;
        this.id = restItem.idUser;
        }
      )
  }

}
