import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListenComponent } from './components/listen/listen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ListenComponent },
  { path: 'listen/:id', component: ListenComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
