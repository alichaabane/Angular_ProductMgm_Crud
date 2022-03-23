import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produits} from "../../models/Produits";
import {environment} from "../../../../environments/environment.prod";
import {SearchResponse} from "../../models/SearchResponse";

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  public readonly API = environment.publicApi + '/';

  constructor(private httpClient: HttpClient) {
  }

  public getProduits() {
    return this.httpClient.get<SearchResponse<Produits>>(this.API + `all`);
  }

  public getProduitsParMC(mc: string, page: number) {

    return this.httpClient.get<SearchResponse<Produits>>(this.API + `produitsParMC?mc=${mc}&page=${page}`);
  }

  public getProduit(ref: number) {
    return this.httpClient.get<any>(this.API + `getProduit/${ref}`);
  }

  public deleteProduit(reference: number) {
    return this.httpClient.delete<any>(this.API + `delete/${reference}`);
  }

  public updateProduit(reference: number, produit: any) {
    return this.httpClient.put<any>(this.API + `update/${reference}`, produit);
  }

  public saveProduit(produit: any) {
    return this.httpClient.post<any>(this.API + `save`, produit);
  }

}
