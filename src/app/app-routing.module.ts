import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { NaoEncontradoComponent } from './views/nao-encontrado/nao-encontrado.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/:id', component: CadastroComponent },
  { path: '**', component: NaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
