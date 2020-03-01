import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(private toastr: ToastrService) { }

  // succes lors de l'ajout
  showSuccess(str: string, str1: string) {
    this.toastr.success(str, str1,
    {
      // disableTimeOut: true,
      timeOut: 3000,
    });
  }
// error de l'insertion des données
  showError(str: string, str1: string) {
    this.toastr.error(str, str1, 
    {
      timeOut: 3000,
    });
  }
  showWarning(str: string, str1: string) {
    this.toastr.warning(str, str1,
    {
      timeOut: 3000,
    });
  }
}
