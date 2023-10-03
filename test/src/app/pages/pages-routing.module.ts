import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppAuthGuard } from '../shared/auth/app-auth.guard';
import { MainComponent } from './main/main.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { CalculateDateComponent } from './calculate-date/calculate-date.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: "", component: MainComponent, canActivate: [AppAuthGuard],
    children: [
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "welcome", component: WelcomeComponent, pathMatch: "full" },
      { path: "conversations", component: ConversationsComponent, pathMatch: "full" },
      { path: "calculate-date", component: CalculateDateComponent, pathMatch: "full" },
      { path: "form", component: FormComponent, pathMatch: "full" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
