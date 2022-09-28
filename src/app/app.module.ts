import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BarraLateralPerfilComponent } from './barra-lateral-perfil/barra-lateral-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    RedefinirSenhaComponent,
    TelaInicialComponent,
    BarraLateralComponent,
    PerfilComponent,
    BarraLateralPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
