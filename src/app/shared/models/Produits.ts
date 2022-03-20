export class Produits {
  designation: string;
  prix: number;
  date: string;

  public constructor(designation: string, prix: number, date: string) {
    this.designation = designation;
    this.prix = prix;
    this.date = date;
  }
}
