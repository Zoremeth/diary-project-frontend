import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ViewerNavbarComponent } from './viewer-navbar/viewer-navbar.component';
import { ViewerEntrylistComponent } from './viewer-entrylist/viewer-entrylist.component';
import { ViewerEditorComponent } from './viewer-editor/viewer-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewerComponent,
    ViewerNavbarComponent,
    ViewerEntrylistComponent,
    ViewerEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
