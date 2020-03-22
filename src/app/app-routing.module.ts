import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubsManageComponent } from './sAdmin/subs-manage/subs-manage.component';
import { DashboardComponent } from './sAdmin/dashboard/dashboard.component';
import { AddSubscriberComponent } from './sAdmin/add-subscriber/add-subscriber.component';
import { ProductsComponent } from './sAdmin/products/products.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orgManagemant', component: SubsManageComponent },
  { path: 'addSubs', component: AddSubscriberComponent },
  { path: 'product', component: ProductsComponent },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
