import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchesComponent } from './matches/matches.component';
import { CommunicationsComponent } from './communications/communications.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FiltersComponent } from './filters/filters.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { PartnerComponent } from './partner/partner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './_services/login.services';
import { StoreService } from './_services/store.service';
import { DataService } from './_services/data.service';
import { CartService } from './_services/cart.service';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

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
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [StoreService, DataService, CartService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
