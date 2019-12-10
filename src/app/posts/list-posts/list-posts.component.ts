import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list-posts",
  templateUrl: "./list-posts.component.html",
  styleUrls: ["./list-posts.component.css"]
})
export class ListPostsComponent implements OnInit {
  // allPosts = [
  //   { title: "First Post title", content: "First Post Contenet" },
  //   { title: "Second Post title", content: "Second Post Contenet" },
  //   { title: "Third Post title", content: "Third Post Contenet" }
  // ];

  @Input()
  allPosts;

  constructor() {}

  ngOnInit() {}
}
