import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sAdmin/sidebar/sidebar.component';
import { NavigationComponent } from './sAdmin/navigation/navigation.component';
import { SubsManageComponent } from './sAdmin/subs-manage/subs-manage.component';
import { DashboardComponent } from './sAdmin/dashboard/dashboard.component';
import { AddSubscriberComponent } from './sAdmin/add-subscriber/add-subscriber.component';
import { ProductsComponent } from './sAdmin/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavigationComponent,
    SubsManageComponent,
    DashboardComponent,
    AddSubscriberComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
