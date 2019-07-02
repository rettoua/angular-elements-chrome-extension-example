import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule, MatInputModule, MatCommonModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  entryComponents: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    MatDialogModule,
    MatCommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const appComponent = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('custom-element', appComponent);
  }
}
