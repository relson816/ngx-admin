import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const Admin_COMPONENTS = [
  AdminComponent,
];

@NgModule({
  imports: [
    AdminRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...Admin_COMPONENTS,
  ],
})
export class AdminModule {
}
