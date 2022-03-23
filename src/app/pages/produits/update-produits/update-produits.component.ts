import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitsService} from "../../../shared/services/http/produits.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-produits',
  templateUrl: './update-produits.component.html',
  styleUrls: ['./update-produits.component.scss']
})
export class UpdateProduitsComponent implements OnInit, AfterContentChecked {

  produitForm: FormGroup;
  submitted = false;
  produit: any = null;
  reference: number = 1;

  constructor(private fb: FormBuilder, private produitsService: ProduitsService,
              private _Activatedroute: ActivatedRoute, private toastrService: ToastrService,
              private router: Router) {

    this.produitForm = this.fb.group({
      designation: ['', Validators.required],
      prix: ['', Validators.required],
      date: [new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear(), Validators.required]
    });
  }

  ngOnInit(): void {
    this.reference = Number(this._Activatedroute.snapshot.paramMap.get("ref"));
    this.getProduit(this.reference);
  }

  initForm() {
    if (this.produit) {
      // @ts-ignore
      this.produitForm.get('designation')?.patchValue(this.produit.designation);
      // @ts-ignore
      this.produitForm.get('prix')?.patchValue(this.produit.prix)
      // @ts-ignore
      this.produitForm.get('date')?.patchValue(this.produit.date);

    }
  }

  ngAfterContentChecked(): void {
    this.initForm();
  }

  getProduit(ref: number) {
    this.produitsService.getProduit(ref).subscribe({
      next: res => {
        if (res) {
          this.produit = res;
        }
      }, error: error => {
        console.log(error);
      }
    })
  }

  onUpdateProduct() {
    this.submitted = true;
    this.produit = {
      reference: this.reference,
      designation: this.produitForm.get('designation')?.value,
      prix: this.produitForm.get('prix')?.value,
      date: this.produitForm.get('date')?.value
    };
    this.produitsService.updateProduit(this.reference, this.produit).subscribe({
      next: res => {
        if (res) {
          this.toastrService.success('le produit N° ' + this.reference + 'est mise à jour avec succès !');
          console.log("update product !");
          this.router.navigate(['/']);
        }
      }, error: error => {
        this.toastrService.error('un problème au niveau du mise à jour du produit :( ');
        console.log(error);
      }
    })
    // stop here if form is invalid
    if (this.produitForm.invalid) {
      return;
    }
  }

}
