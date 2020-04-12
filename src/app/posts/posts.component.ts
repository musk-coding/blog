import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Post 1',
        author: 'Author',
        text: 'Elit tempor nisi aliquip fugiat cupidatat non. Ut do ut Lorem mollit sit. Ex incididunt cillum aute anim labore eu. Minim aliquip dolor dolor do eu non fugiat sint irure. Aliqua anim labore sunt dolore tempor mollit sit voluptate dolore id minim et. Ullamco aute esse reprehenderit est Lorem. Ex proident sunt ad proident eu veniam consequat tempor nulla reprehenderit labore commodo.'
      },
      {
        id: 2,
        title: 'Post 2',
        author: 'Author',
        text: 'Proident ullamco deserunt esse commodo. Adipisicing excepteur officia consectetur anim mollit dolor est eiusmod ullamco nulla dolore sint. Duis deserunt amet dolor est nisi culpa eu exercitation commodo ad. Ullamco aliqua cupidatat id occaecat laboris irure nulla officia labore Lorem. Irure do Lorem qui eu pariatur incididunt aliqua id ipsum. Ex et nulla proident cupidatat sit amet commodo.'
      },
      {
        id: 3,
        title: 'Post 3',
        author: 'Author',
        text: 'Dolor consectetur ad cupidatat deserunt deserunt exercitation fugiat in occaecat cupidatat amet. Ullamco voluptate aliquip cillum veniam quis eiusmod non cupidatat aliquip reprehenderit eu velit fugiat tempor. Consectetur do laboris dolore labore nostrud. Qui deserunt pariatur sit enim eiusmod dolore duis ullamco. Duis adipisicing tempor sint consequat tempor labore in nisi amet.'
      }
    ]
  }

}
