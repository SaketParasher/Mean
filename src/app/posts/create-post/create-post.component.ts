import { Component, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostService } from '../posts.service';

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"]
})
export class CreatePostComponent implements OnInit {


  constructor(private postSVC: PostService) { }

  ngOnInit() { }

  addPost(postForm: NgForm) {
    if (postForm.valid) {
      this.postSVC.addPost({ content: postForm.value.content, title: postForm.value.title });
      postForm.resetForm();
    }

  }
}
