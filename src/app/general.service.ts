import { Injectable } from '@angular/core';
const url = '../../assets/js/codigo.js';

@Injectable()
export class GeneralService {

  loadAPI: Promise<any>;
  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.cargarScript();
    });

  }

  public cargarScript() {

    console.log(' script Grid');

    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);
  }

}

