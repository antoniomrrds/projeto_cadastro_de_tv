import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';  
//modulos material icones
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {  MatSnackBarModule } from '@angular/material/snack-bar'

import { FormsModule ,ReactiveFormsModule} from'@angular/forms'

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


import { HeaderComponent } from './components/header/header.component';

import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//para fazer requisiçoes ao banco 
import{ HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import localePT from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { PlayerCreateComponent } from './components/players/player-create/player-create.component';
import { ProductReadComponent } from './components/products/product-read/product-read.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { PlayerDeleteComponent } from './components/players/player-delete/player-delete.component';
import { PlayerUpdateComponent } from './components/players/player-update/player-update.component';
import { PlayerReadComponent } from './components/players/player-read/player-read.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

registerLocaleData(localePT)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    ProductsCreateComponent,
    PlayerCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    PlayerDeleteComponent,
    PlayerUpdateComponent,
    PlayerReadComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    NgbModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatExpansionModule,

    
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue:'pt-BR',
 } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
