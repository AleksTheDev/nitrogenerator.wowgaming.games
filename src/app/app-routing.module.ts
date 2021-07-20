import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimNitroComponent } from './claim-nitro/claim-nitro.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'claim', component: ClaimNitroComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
