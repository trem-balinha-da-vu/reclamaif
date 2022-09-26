import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "cadastrar", component: CadastrarUsuarioComponent},
  {path: "redefinir", component: RedefinirSenhaComponent},
  {path: "tela-inicial", component: TelaInicialComponent},
  {path: "perfil", component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
