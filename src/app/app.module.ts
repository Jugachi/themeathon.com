import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MaterialImportModule } from './material-import.module';

import { AppComponent } from './components/app.component';
import { StreamComponent, DescriptionDialog } from './components/stream.component';
import { EventsComponent, EventsConfirmationDialog } from './components/events.component';

const appRoutes: Routes = [
	{ path: '', component: StreamComponent},
	{ path: 'events', component: EventsComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
	StreamComponent,
	EventsComponent,
	DescriptionDialog,
	EventsConfirmationDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialImportModule,
	BrowserAnimationsModule,
	RouterModule.forRoot(
		appRoutes
	  )
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ DescriptionDialog, EventsConfirmationDialog ]
})
export class AppModule {
    constructor(overlayContainer: OverlayContainer) {
        overlayContainer.getContainerElement()
            .classList.add('app-dark-theme');
    }
}