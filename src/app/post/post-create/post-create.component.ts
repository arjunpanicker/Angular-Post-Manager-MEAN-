import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

  public onAddPost(form: NgForm) {
    const post: Post = { id: '', title: form.value.title, content: form.value.content };
    this.postService.addPost(post);
    form.reset();
  }

}
