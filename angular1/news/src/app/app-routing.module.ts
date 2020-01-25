import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MainViewComponent} from "./main-view/main-view.component";


const routes: Routes = [
  {path: 'main', component: MainViewComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
