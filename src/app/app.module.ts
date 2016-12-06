import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CharacterNameComponent } from './character-name/character-name.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { ErrorScreenComponent } from './error-screen/error-screen.component';

const routes : Routes = [
  {path: 'welcome', component: WelcomeScreenComponent},
  {path: 'select', component: SelectionScreenComponent},
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {path: '**', component: ErrorScreenComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CharacterNameComponent,
    WelcomeScreenComponent,
    SelectionScreenComponent,
    ErrorScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
