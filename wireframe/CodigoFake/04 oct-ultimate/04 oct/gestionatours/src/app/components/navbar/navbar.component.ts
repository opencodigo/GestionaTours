import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { TourXdepService } from 'src/app/services/tour-xdep.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { ViajesByProvService } from 'src/app/services/viajes-by-prov.service';
declare var $: any;



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  @Output() cambioDep =  new EventEmitter(); 
  toursPorDep;
  viajesPorProvin;
  provincias;
  selectedLevel;
  prov_id: Number = 0 ;
  constructor(private authService: AuthService,
              private _sRouter:Router,
              private _stourByDep:TourXdepService  ,
              private _sprovincia: ProvinciasService  ,
              private _sviajeprov:ViajesByProvService   ) {

console.log('en el contructor navbar');

               }

  ngOnInit() {
    console.log('on intt navbar');
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = (user != null);
    });
    // ----traer destinos---//

    this._sprovincia.traerProvincias().then((provin: any) => {
      this.provincias = provin
    }
    ).catch((err) => {
      console.log({
        mensaje: 'no se trajo automaticamente las provincias',
        data: err
      })
    
    })// ----traer destinos---//



  }
  signOut(): void {
    this.authService.signOut();
  }

  TourxDep(){ //byJorge
    console.log('se hio click en busque da x dep y -....')
    this._sRouter.navigate(['/tourxdep'] )
  //  this._stourByDep.traerTourxDeps().subscribe((datos)=>{
  //   //console.log(datos)
  //   this.toursPorDep = datos
  //   //this._sRouter.navigate(['/tours']) 
  //   this.cambioDep.emit(this.toursPorDep)

  //})
  }

  cambioPabellon(e) {
    
    let provID:string ='';
    provID = e.target.innerText.split(' ')
    console.log(provID[1]);
    let id:number = +provID[1];
    this._sRouter.navigate([ `/tourbyprov/${id}`]);
    
  }



}
