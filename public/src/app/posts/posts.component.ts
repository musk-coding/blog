import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private service: PostService) { }

  ngOnInit(): void {    
    this.service.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        alert('Error while fetching posts from server');
      }
    );
  }

}
