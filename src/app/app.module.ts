import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './appmaterial.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import { LdapDetailComponent } from './ldap-detail/ldap-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LdapEditComponent } from './ldap-edit/ldap-edit.component';
import { LdapAddComponent } from './ldap-add/ldap-add.component';
import { AlertComponent } from './share/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LdapListComponent,
    LdapEditComponent,
    LdapAddComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
