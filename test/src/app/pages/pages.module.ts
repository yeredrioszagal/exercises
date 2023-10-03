import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DialogWelcome, WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ConversationsComponent } from './conversations/conversations.component';
import { CalculateDateComponent } from './calculate-date/calculate-date.component';
import { FormComponent } from './form/form.component';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import localeES from '@angular/common/locales/es';
import { PagesService } from './service/pages.service';
// import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localeES);

@NgModule({
  declarations: [
    WelcomeComponent,
    MainComponent,
    ConversationsComponent,
    CalculateDateComponent,
    FormComponent,
    DialogWelcome,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    AngularMaterialModule,
    // MatNativeDateModule,
  ],
  providers: [DialogWelcome,
    {
      provide: LOCALE_ID,
      useValue: 'es-mx'
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }, PagesService]
})
export class PagesModule { }
