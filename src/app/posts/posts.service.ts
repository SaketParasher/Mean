import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {

  constructor(private http: HttpClient) { }

  posts: Post[] = [];
  emitAllPosts = new Subject<Post[]>();

  getPosts() {
    this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts')
      .subscribe((posts) => {
        this.posts = posts.posts;
        this.emitAllPosts.next([...this.posts])
      })
  }

  addPost(newPost: Post) {
    const postToAdd = { title: newPost.title, content: newPost.content }
    this.http.post("http://localhost:3000/api/posts", postToAdd)
      .subscribe((success) => {
        console.log(success);
        this.posts.push(postToAdd);
        this.emitAllPosts.next([...this.posts]);
      })

  }

}
