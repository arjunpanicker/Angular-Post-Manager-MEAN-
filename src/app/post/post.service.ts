import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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
    this.http.get('http://localhost:3000/posts')
      .pipe(map((postData: any[]) => {
        return postData.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      }))
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.isPostAvailable.next([...this.posts]);
      });
  }

  public addPost(post: Post) {
    this.http.post<{message: string, postId: string}>('http://localhost:3000/post', post)
      .subscribe((res) => {
        console.log(res.message)
        post.id = res.postId;
        this.posts.push(post);
        this.isPostAvailable.next([...this.posts]);
      });
  }

  public deletePost(postId: string) {
    this.http.delete('http://localhost:3000/posts/' + postId)
      .subscribe((res) => {
        console.log("Deleted!");
        this.posts = this.posts.filter(post => post.id !== postId);
        this.isPostAvailable.next([...this.posts]);
      });
  }
}
