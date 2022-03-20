import {Injectable} from '@angular/core';
import * as Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() {
  }

  warning(msg: string) {
    return Swal.default.fire({
      icon: 'warning',
      html: msg,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      reverseButtons: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText:'Annuler',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-primary'
    });
  }

  danger(msg: string) {
    return Swal.default.fire({
      icon: 'error',
      text: msg,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: true,
      focusConfirm: false,
      reverseButtons: true,
      confirmButtonText: 'OK',
      confirmButtonClass: 'btn btn-danger',
    });
  }

  notification(msg: string) {
    return Swal.default.fire({
      icon: 'warning',
      text: msg,
      showCloseButton: false,
      showCancelButton: true,
      showConfirmButton: false,
      focusCancel: false,
      cancelButtonText:
        'OK',
      timer: 7000
    });
  }

  success(msg: string) {
    return Swal.default.fire({
      icon: 'success',
      text: msg,
      showCloseButton: false,
      showCancelButton: true,
      showConfirmButton: false,
      focusCancel: true,
      reverseButtons: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonText: 'OK',
      timer: 4000
    });
  }

}
