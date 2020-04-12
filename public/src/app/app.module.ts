import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'write', component: WriteComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
