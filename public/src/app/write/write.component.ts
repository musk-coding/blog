import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  postForm: FormGroup;

  constructor(private service: PostService,
              private router: Router) { }

  ngOnInit(): void {
    this.postForm = this.createPostForm();
  }

  createPostForm() {
    return new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      text: new FormControl('', [Validators.required, Validators.maxLength(500)])
    });
  }

  onSubmit() {
    this.service.createPost(this.postForm.value).subscribe(
      (response) => {
        alert('Successfully created post');
        this.router.navigate(['/posts']);
      },
      (error) => {
        console.log('Error is: ', error);
      }
    );
  }

}