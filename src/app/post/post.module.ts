import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { AppMaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PostListComponent, PostCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  exports: [PostCreateComponent, PostListComponent],
  // providers: [
  //   PostService
  // ]
})
export class PostModule { }
