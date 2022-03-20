import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {ProduitsComponent} from "./pages/produits/produits.component";
import {UpdateProduitsComponent} from "./pages/produits/update-produits/update-produits.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProduitsComponent } from './pages/produits/add-produits/add-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    UpdateProduitsComponent,
    AddProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: false,
      enableHtml: true,
    })
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
