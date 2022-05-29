import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Produtos
import { ProductReadComponent } from './components/products/product-read/product-read.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';


//Players

import { PlayerCreateComponent } from './components/players/player-create/player-create.component';
import { PlayerReadComponent } from './components/players/player-read/player-read.component';
import { PlayerUpdateComponent } from './components/players/player-update/player-update.component';
import { PlayerDeleteComponent } from './components/players/player-delete/player-delete.component';



import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'', component:DashboardComponent
  },
  {
    path:'product-create', component:ProductsCreateComponent
  },
  {
    path:'product-read', component:ProductReadComponent
  },
  {
    path:'product/update/:id', component:ProductUpdateComponent
  },
  {
    path:'product/delete/:id', component:ProductDeleteComponent
  },
  {
    path:'player-create', component:PlayerCreateComponent
  },
  {
    path:'player-read', component:PlayerReadComponent
  },
  {
    path:'player/update/:id', component:PlayerUpdateComponent

  },
  {
    path:'player/delete/:id', component:PlayerDeleteComponent

  }

 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
