import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { CompoundListComponent } from './components/compound-list/compound-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SpecificCompoudComponent } from './pages/specific-compoud/specific-compoud.component';
import { AddUpdateCompoundComponent } from './pages/add-update-compound/add-update-compound.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'compounds', pathMatch: 'full' },
  { path: 'compounds', component: DashboardComponent },
  { path: 'compound/add', component: AddUpdateCompoundComponent },
  { path: 'compound/:id', component: SpecificCompoudComponent },
  { path: 'compound/edit/:id', component: AddUpdateCompoundComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    CompoundListComponent,
    DashboardComponent,
    SpecificCompoudComponent,
    AddUpdateCompoundComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
