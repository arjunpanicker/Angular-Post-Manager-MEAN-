import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../models/post.interface';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  public posts: Post[] = [];
  private subs = new Subscription();

  constructor(private postService: PostService) { }

  public ngOnInit(): void {
    this.postService.fetchPosts();
    this.subs = this.postService.getPostsListener()
      .subscribe(posts => {
        this.posts = posts;
        console.log(posts);
      });
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public onDelete(postId: string) {
    this.postService.deletePost(postId);
  }

}
