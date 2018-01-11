import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  imageUrls = [
    {image:'angularfirelogo.png'},
    {image:'apollologo.png'},
    {image:'css3logo.svg'},
    {image:'emberlogo.png'},
    {image:'firebaselogo.png'},
    {image:'gitlogo.png'},
    {image:'graphqllogo.svg'},
    {image:'htmllogo.svg'},
    {image:'jslogo.png'},
    {image:'mongologo.jpg'},
    {image:'nginxlogo.png'},
    {image:'nglogo.png'},
    {image:'nodelogo.png'},
    {image:'pwalogo.png'},
    {image:'reactlogo.svg'},
    {image:'webpacklogo.png'}
  ];

  imageUrlLookUp(url) {
    return `assets/images/logos/${url}`;
  }
}
