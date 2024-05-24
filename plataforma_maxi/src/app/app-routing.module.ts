import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./layout/landing-page/landing-page.component";
import {MainComponent} from "./layout/main/main.component";


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/search-offers/search-offers.module').then(m => m.SearchOffersModule),
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
