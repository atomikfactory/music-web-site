import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-new-blog-post',
  templateUrl: './new-blog-post.component.html',
  styleUrls: ['./new-blog-post.component.css']
})
export class NewBlogPostComponent implements OnInit {

  previewHtmlPost: string;
  htmlContent: string;
  constructor() { }

  ngOnInit() {
    $('#summernote').summernote();

  }

  postPreview() {
    this.htmlContent = $("#summernote").summernote('code');
    this.previewHtmlPost = this.htmlContent;

  }

}
