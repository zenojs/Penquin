import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreService } from './store.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatchesComponent } from './matches/matches.component';
import { CommunicationsComponent } from './communications/communications.component';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FiltersComponent } from './filters/filters.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

import { DataService } from './data.service';
import { CartService } from './cart.service';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MatchesComponent,
    CommunicationsComponent,    
    SearchBarComponent,
    FiltersComponent,
    ShowcaseComponent,
    SortFiltersComponent,
    ProductThumbnailComponent,
    PartnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [StoreService,   
     DataService,
    CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
