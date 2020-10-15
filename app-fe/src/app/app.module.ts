import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuloRoteamento } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../../node_modules/ngx-bootstrap/modal';
import { ConfigurationParameters } from './singleton/configuration.singleton';
import { DefaultListComponent } from './default-list/default-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MessageCarregandoComponent } from './message-carregando/message-carregando.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NgxMaskModule } from '../../node_modules/ngx-mask';
import { CurrencyMaskModule } from '../../node_modules/ng2-currency-mask';
import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';
import { VeiculoViewComponent } from './veiculo/veiculo-view/veiculo-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

];

registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    DefaultListComponent,
    MessageCarregandoComponent,
    MenuBarComponent,
    MessageComponent,
    HomeComponent,
    VeiculoListComponent,
    VeiculoFormComponent,
    VeiculoViewComponent
  ],
  imports: [
    BrowserModule,
    CurrencyMaskModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot(),
    ModuloRoteamento,
    NgxUpperCaseDirectiveModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    ConfigurationParameters
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessageCarregandoComponent]
})
export class AppModule { }
