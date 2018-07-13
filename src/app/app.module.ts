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
import { MatDialogModule, MatSelectModule, MatInputModule } from '@angular/material';
import { ViewerEntrylistDeleteDialogComponent } from './viewer-entrylist-delete-dialog/viewer-entrylist-delete-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ViewerEntrylistRenameDialogComponent } from './viewer-entrylist-rename-dialog/viewer-entrylist-rename-dialog.component';
import { QuillModule } from 'ngx-quill';
import { ViewerEntrylistAddDialogComponent } from './viewer-entrylist-add-dialog/viewer-entrylist-add-dialog.component';
import { ViewerEntrylistProtectDialogComponent } from './viewer-entrylist-protect-dialog/viewer-entrylist-protect-dialog.component';
import { LoginNewuserComponent } from './login-newuser/login-newuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewerComponent,
    ViewerNavbarComponent,
    ViewerEntrylistComponent,
    ViewerEditorComponent,
    ViewerEntrylistDeleteDialogComponent,
    ViewerEntrylistRenameDialogComponent,
    ViewerEntrylistAddDialogComponent,
    ViewerEntrylistProtectDialogComponent,
    LoginNewuserComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    QuillModule,
  ],
  entryComponents: [
    ViewerEntrylistDeleteDialogComponent,
    ViewerEntrylistRenameDialogComponent,
    ViewerEntrylistAddDialogComponent,
    ViewerEntrylistProtectDialogComponent,
    LoginNewuserComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
