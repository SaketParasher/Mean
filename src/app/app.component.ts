import { Component } from "@angular/core";
import { Post } from "./posts/post.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Mean";
  postList: Post[] = [];

  addPostToList(post: Post) {
    this.postList.push({ title: post.title, content: post.content });
  }
}
