import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ViewerNavbarComponent } from './viewer-navbar/viewer-navbar.component';
import { ViewerEntrylistComponent } from './viewer-entrylist/viewer-entrylist.component';
import { ViewerEditorComponent } from './viewer-editor/viewer-editor.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '../../node_modules/@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewerComponent,
    ViewerNavbarComponent,
    ViewerEntrylistComponent,
    ViewerEditorComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [ViewerNavbarComponent, ViewerComponent, ViewerEntrylistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
