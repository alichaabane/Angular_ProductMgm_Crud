import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitsService} from "../../../shared/services/http/produits.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Produits} from "../../../shared/models/Produits";

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.scss']
})
export class AddProduitsComponent implements OnInit {

  produitForm: FormGroup;
  submitted = false;
  produit: any;

  constructor(private fb: FormBuilder, private produitsService: ProduitsService,
              private toastrService: ToastrService, private router: Router) {
    this.produitForm = this.fb.group({
      designation: ['', Validators.required],
      prix: ['', Validators.required],
      date: [new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear(), Validators.required]
    });
  }

  ngOnInit(): void {

  }

  addProduct(): void {
    this.submitted = true;
    this.produit = {
      designation: this.produitForm.get('designation')?.value,
      prix: this.produitForm.get('prix')?.value,
      date: this.produitForm.get('date')?.value
    };
    this.produitsService.saveProduit(this.produit).subscribe({
      next: res => {
        if (res) {
          this.toastrService.success('le produit N° ' + 'est ajouté avec succès !');
          console.log("add product !");
          this.router.navigate(['/']);
        }
      }, error: error => {
        this.toastrService.error('un problème au niveau d\'ajout du produit :( ');
        console.log(error);
      }
    })
    // stop here if form is invalid
    if (this.produitForm.invalid) {
      return;
    }
  }

}
