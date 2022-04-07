import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "../../shared/services/http/produits.service";
import {SweetAlertService} from "../../shared/services/in-app/sweet-alert.service";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produits: any;
  motCle: string = '';
  pages: number[] = [];
  totalPages: number = 0;
  page = 1;
  currentPage: number = 0;

  constructor(private produitsService: ProduitsService,
              private sweetAlertService: SweetAlertService,
              private toastrService: ToastrService,
              private router: Router) {
    this.getProduitsParMotCle();
  }

  ngOnInit(): void {
  }

  goToPage(page: any) {
    this.currentPage = page;
    this.getProduitsParMotCle();
  }

  deleteProduits(p: any) {
    this.sweetAlertService.warning('Voulez vous supprimer ' + p.designation + ' ?').then(e => {
        if (e.value) {
          this.produitsService.deleteProduit(p.reference).subscribe(res => {
            console.log("deleted successfully");
            this.toastrService.success('le produit est supprimé avec succès !');
            this.getProduitsParMotCle();
          }, error => {
            this.toastrService.error('un problème au niveau du suppression :( ');
            console.log(error);
          })
        }
      }
    );
  }

  updateProduit(prod: any) {
    console.log('update !!', prod);
    this.router.navigate(['/update', { ref: prod.reference}]).then();
  }


  // // tous les produits
  getProduits(): void {
    this.produitsService.getProduits().subscribe(result => {
      if (result) {
        this.produits = result.data;
        this.totalPages = result.totalPages || 0;
        this.pages = new Array(this.totalPages);
      }
      console.log(result);
    }, error => {
      console.log(error);
    })
  }

  getProduitsParMotCle() {
    this.produitsService.getProduitsParMC(this.motCle, this.currentPage).pipe().subscribe(result => {
      if (result) {
        console.log(result);
          this.produits = result.data;
          this.totalPages = result.totalPages || 0;
          this.pages = new Array(this.totalPages);
          console.log(this.pages);
      }
    }, error => {
      console.log(error);
    })
  }

}
