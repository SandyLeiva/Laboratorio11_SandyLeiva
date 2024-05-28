import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../material-module";
import { SalesComponent } from "./sales/sales.component";
import { ActivityComponent } from "./activity/activity.component";
import { ProductComponent } from "./product/product.component";
import { CardsComponent } from "./cards/cards.component";
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
    declarations: [DashboardComponent, SalesComponent, ActivityComponent, ProductComponent, CardsComponent],
    imports: [CommonModule, MaterialModule, FormsModule, NgApexchartsModule],
    exports: [DashboardComponent, SalesComponent, ActivityComponent, ProductComponent, CardsComponent]
})
export class DashboardModule {
}
