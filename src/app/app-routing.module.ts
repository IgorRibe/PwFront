import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarComponent } from './components/produtos/listar/listar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
