import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"]
})
export class CreatePostComponent implements OnInit {
  @Output()
  emitPost = new EventEmitter<Post>();

  constructor() {}

  ngOnInit() {}

  addPost(postForm: NgForm) {
    this.emitPost.emit({
      content: postForm.value.content,
      title: postForm.value.title
    });
  }
}
