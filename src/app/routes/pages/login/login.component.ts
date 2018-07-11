import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { debug } from 'util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   
 
    constructor() {

        

    }

    ngOnInit() {
    
    }
   

}
