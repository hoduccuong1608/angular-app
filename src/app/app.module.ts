import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {MainLayoutComponent} from "./layouts/main/main-layout.component";
import {HeaderComponent} from "./layouts/components/header/header.component";
import {SidebarComponent} from "./layouts/components/sidebar/sidebar.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MainLayoutService} from "./layouts/service/main.layout.service";
import {WindowService} from "./layouts/service/window.service";
import {SidebarService} from "./layouts/service/sidebar.service";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MainLayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule
    ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    MainLayoutService, WindowService, SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
