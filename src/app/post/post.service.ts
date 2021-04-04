import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModule } from './post.module';
import { Subject } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[];
  private isPostAvailable = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  public getPostsListener() {
    return this.isPostAvailable.asObservable();
  }

  public fetchPosts() {
    this.http.get<{data: Post[]}>('http://localhost:3000/posts')
      .subscribe(res => {
        this.posts = res.data;
        this.isPostAvailable.next([...this.posts]);
      });
  }

  public addPost(post: Post) {
    this.http.post<{message: string}>('http://localhost:3000/post', post)
      .subscribe((res) => {
        console.log(res.message)
        this.fetchPosts();
      });
  }
}
