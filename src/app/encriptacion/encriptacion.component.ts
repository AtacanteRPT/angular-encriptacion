import { Component, OnInit, ElementRef } from '@angular/core';

import { GeneralService } from '../general.service'
@Component({
  selector: 'app-encriptacion',
  templateUrl: './encriptacion.component.html',
  styleUrls: ['./encriptacion.component.css']
})
export class EncriptacionComponent implements OnInit {
  public keyEncriptado: string = ''

  constructor(private generalService: GeneralService, private el: ElementRef) { }

  ngOnInit() {
    this.generalService.cargarScript();

  }

  cambio(e) {
    this.keyEncriptado = e;
    console.log("Cambio : " + e)
  }

  mostrarDatos() {

    let lis = this.el.nativeElement.getElementsByClassName("area1");
        console.log("encriptacion : " + lis.area1.value)

    console.dir(lis)

  }

}

