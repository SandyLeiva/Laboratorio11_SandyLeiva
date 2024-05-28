import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {FullComponent} from "./components/layouts/full/full.component";
import { AlertsComponent } from "./components/core/alerts/alerts.component";
import { FormsComponent } from "./components/core/forms/forms.component";
import { ProductComponent } from "./components/dashboard/product/product.component";
import { GridListComponent } from "./components/core/grid-list/grid-list.component";
import { MenuComponent } from "./components/core/menu/menu.component";
import { TabsComponent } from "./components/core/tabs/tabs.component";
import { ExpansionComponent } from "./components/core/expansion/expansion.component";
import { ChipsComponent } from "./components/core/chips/chips.component";
import { ProgressComponent } from "./components/core/progress/progress.component";
import { ToolbarComponent } from "./components/core/toolbar/toolbar.component";
import { ProgressSnipperComponent } from "./components/core/progress-snipper/progress-snipper.component";
import { SnackbarComponent } from "./components/core/snackbar/snackbar.component";
import { SliderComponent } from "./components/core/slider/slider.component";
import { SlideToggleComponent } from "./components/core/slide-toggle/slide-toggle.component";
import { TooltipsComponent } from "./components/core/tooltips/tooltips.component";
import { ButtonsComponent } from "./components/core/buttons/buttons.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"login", component:LoginComponent},
      {path:"register", component:RegisterComponent},
      {path:"home", component:DashboardComponent},
      {path:"alerts", component:AlertsComponent},
      {path:"forms", component:FormsComponent},
      {path:"table", component:ProductComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent},
      {path:"chips", component:ChipsComponent},
      {path:"progress", component:ProgressComponent},
      {path:"toolbar", component:ToolbarComponent},
      {path:"progress-snipper", component:ProgressSnipperComponent},
      {path:"snackbar", component:SnackbarComponent},
      {path:"slider", component:SliderComponent},
      {path:"slide-toggle", component:SlideToggleComponent},
      {path:"tooltip", component:TooltipsComponent},
      {path:"button", component:ButtonsComponent},
    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
