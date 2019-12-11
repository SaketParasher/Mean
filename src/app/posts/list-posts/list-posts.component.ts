import { Component, OnInit, OnDestroy } from "@angular/core";
import { PostService } from '../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: "app-list-posts",
  templateUrl: "./list-posts.component.html",
  styleUrls: ["./list-posts.component.css"]
})
export class ListPostsComponent implements OnInit, OnDestroy {

  allPosts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postSVC: PostService) { }

  ngOnInit() {
    this.postSVC.getPosts();
    this.postsSubscription = this.postSVC.emitAllPosts.subscribe((allPosts) => {
      this.allPosts = allPosts;
    })

  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
