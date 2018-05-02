import { LoginService } from './_services/login.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreService } from './_services/store.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { MatchesComponent } from './matches/matches.component';
import { CommunicationsComponent } from './communications/communications.component';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FiltersComponent } from './filters/filters.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { DataService } from './_services/data.service';
import { CartService } from './_services/cart.service';
import { PartnerComponent } from './partner/partner.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatProgressSpinnerModule, MatDialogModule, MatCheckboxModule, MatListModule, MatSidenavModule, MatToolbarModule, MatAutocompleteModule, MatProgressBarModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

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
    SidenavComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
    MatProgressSpinnerModule, MatDialogModule, MatCheckboxModule, MatListModule, MatSidenavModule,
    MatToolbarModule, MatCheckboxModule, MatDialogModule, MatListModule, MatAutocompleteModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [StoreService, DataService, CartService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
