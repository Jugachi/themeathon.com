import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayContainer } from '@angular/cdk/overlay';
import { MaterialImportModule } from './material-import.module';

import { AppComponent } from './components/app.component';
import { StreamComponent, DescriptionDialog } from './components/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamComponent,
    DescriptionDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialImportModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent,  StreamComponent ],
  entryComponents: [DescriptionDialog]
})
export class AppModule {
    constructor(overlayContainer: OverlayContainer) {
        overlayContainer.getContainerElement()
            .classList.add('app-dark-theme');
    }
}