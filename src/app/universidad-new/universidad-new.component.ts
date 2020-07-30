import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { UserService,  } from '../services/user.service';
import {  UniversidadService} from '../services/universidad.service';
//import { Alumno} from '../models/alumnos';
import { Universidad } from '../models/universidads';

@Component({
  selector: 'app-universidad-new',
  templateUrl: './universidad-new.component.html',
  styleUrls: ['./universidad-new.component.css'],
  providers: [UserService,UniversidadService]
})
export class UniversidadNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public universidads: Universidad;
  public status_universidads : string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService,
    private _universidadService: UniversidadService


  ) {
    this.page_title = 'Datos Universidad';
    this.identity = this._UserService.getIdentity();
    this.token= this._UserService.getToken();


   } 

  ngOnInit (){
    if(this.identity == null ){
      this._router.navigate(["/login"]);

    }else{
      //crear objeto usuariio
      this.universidads = new Universidad(1,'','','', null,null);
        

    }
    


  }
  onSubmit(form){
    this._universidadService.create(this.token, this.universidads).subscribe(
      response =>{
        //console.log(response);
        if(response.status == 'success'){
          this.universidads = response.universidads;
          this.status_universidads = 'success';
          this._router.navigate(['/vista-persona']);

        } else{
          this.status_universidads = 'error';

        }
       // this.car = response.car;

      },
      error => {
        console.log(<any>error);
        this.status_universidads = 'error';
        
      }

    );
  }

}

