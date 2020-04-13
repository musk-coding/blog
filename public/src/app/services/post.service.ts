import { apiUrl } from './../shared/api-url';
import { Injectable } from '@angular/core';
import { Post } from '../shared/models/Post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[];

  constructor(private http: HttpClient) {}

  getAllPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(environment.backUrl + apiUrl.posts);
  }

  createPost(post: Post) : Observable<Post> {
    return this.http.post<Post>(environment.backUrl + apiUrl.posts, post);
  }
}
