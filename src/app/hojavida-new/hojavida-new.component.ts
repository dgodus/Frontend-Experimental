import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { UserService,  } from '../services/user.service';
import {  HojavidaService} from '../services/hojavida.service';
//import { Alumno} from '../models/alumnos';
import { Hojavida} from '../models/hojavidas';


@Component({
  selector: 'app-hojavida-new',
  templateUrl: './hojavida-new.component.html',
  styleUrls: ['./hojavida-new.component.css'],
  providers: [UserService,HojavidaService]
  
})
export class HojavidaNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public hojavidas: Hojavida;
  public status_hojavidas : string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService,
    private _hojavidaService: HojavidaService


  ) {
    this.page_title = 'Datos hoja de vida';
    this.identity = this._UserService.getIdentity();
    this.token= this._UserService.getToken();


   } 

  ngOnInit (){
    if(this.identity == null ){
      this._router.navigate(["/login"]);

    }else{
      //crear objeto usuariio
      this.hojavidas = new Hojavida(1,'','','','','','', null,null);
        

    }
    


  }
  onSubmit(form){
    this._hojavidaService.create(this.token, this.hojavidas).subscribe(
      response =>{
        //console.log(response);
        if(response.status == 'success'){
          this.hojavidas = response.hojavidas;
          this.status_hojavidas = 'success';
          this._router.navigate(['/panel-control']);

        } else{
          this.status_hojavidas = 'error';

        }
       // this.car = response.car;

      },
      error => {
        console.log(<any>error);
        this.status_hojavidas = 'error';
        
      }

    );
  }

}

