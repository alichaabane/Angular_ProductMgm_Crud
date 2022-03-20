import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProduitsComponent} from "./pages/produits/produits.component";
import {UpdateProduitsComponent} from "./pages/produits/update-produits/update-produits.component";
import {AddProduitsComponent} from "./pages/produits/add-produits/add-produits.component";

const routes: Routes = [
  {path: '', component: ProduitsComponent,
  },
  {path: 'update', component: UpdateProduitsComponent},
  {path: 'add', component: AddProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
