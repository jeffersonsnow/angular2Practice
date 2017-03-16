import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { OtherComponent } from './other/other.component';
// import { AnotherComponent } from './other/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayDatabindingComponent } from './databinding/two-way-databinding.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  declarations: [ //declares what directives and pipes you'll use
    AppComponent,
    // OtherComponent,
    // AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], //holds application-wide services
  bootstrap: [AppComponent]
})
export class AppModule { }
