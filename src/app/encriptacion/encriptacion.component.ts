import { Component, OnInit, ElementRef } from '@angular/core';

import {GeneralService} from '../general.service'
@Component({
  selector: 'app-encriptacion',
  templateUrl: './encriptacion.component.html',
  styleUrls: ['./encriptacion.component.css']
})
export class EncriptacionComponent implements OnInit {
 public keyEncriptado: string='ALEXJKJKJKLJKLJ'

  constructor(private generalService : GeneralService , private el: ElementRef) { }

  ngOnInit() {
    this.generalService.cargarScript();

  }

  cambio(e : any){
console.log("Cambio : "+ e)
  }

  mostrarDatos(){

    console.log("encriptacion : " + this.keyEncriptado)

  }

}

