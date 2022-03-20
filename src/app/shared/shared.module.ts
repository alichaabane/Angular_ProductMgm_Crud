import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {ProduitsService} from "./services/http/produits.service";
import {SweetAlertService} from "./services/in-app/sweet-alert.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  providers: [
    ProduitsService,
    SweetAlertService]
})
export class SharedModule { }
