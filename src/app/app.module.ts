import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';
import { AngularMentionsComponent } from './angular-mentions/angular-mentions.component';
import { NgxMentionsComponent } from './ngx-mentions/ngx-mentions.component';
import { NgxMentionsModule } from 'ngx-mentions';

@NgModule({
  declarations: [AppComponent, AngularMentionsComponent, NgxMentionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MentionModule,
    NgxMentionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
