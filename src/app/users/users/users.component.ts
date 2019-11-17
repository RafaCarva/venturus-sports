import { Days } from './../../value-objects/days.enum';
import { RideInGroup } from './../../value-objects/ride-in-group.enum';
import { PhotoService } from './../../services/photo.service';
import { AlbumService } from './../../services/album.service';
import { UserService } from './../../services/user.service';
import { PostService } from './../../services/post.service';
import { User } from './../../models/user';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  usersObs$: Observable<User[]>;
  allPosts: Post[];
  allAlbuns: Album[];
  allPhotos: Photo[];

  constructor(
    private userService: UserService,
    private postService: PostService,
    private albumService: AlbumService,
    private photoService: PhotoService
    ) {
      this.usersObs$ = this.userService.getUsers();
     }

  ngOnInit() {
   this.postService.getPosts().subscribe(res => this.allPosts = res);
   this.albumService.getAlbuns().subscribe(res => this.allAlbuns = res);
   this.photoService.getPhotos().subscribe(res => this.allPhotos = res);
  }

  getTotalPostsByUser(id: number): number {
    let totalPosts = 0;
    this.allPosts.forEach((value) => { if (value.userId === id) { totalPosts++; } });
    return totalPosts;
  }

  getTotalAlbunsByUser(id: number): number {
    let totalAlbuns = 0;
    this.allAlbuns.forEach((value) => { if (value.userId === id) { totalAlbuns++; } });
    return totalAlbuns;
  }

  getTotalPhotosByAlbum(id: number): number {
    let totalPhotos = 0;
    this.allPhotos.forEach((value) => { if (value.albumId === id) { totalPhotos++; } });
    return totalPhotos;
  }

  getRandomRideInGroupValue(): string {
    return RideInGroup[Math.floor(Math.random() * 3) + 1];
  }

  getRandomDays(): string {
    return Days[Math.floor(Math.random() * 6) + 1];
  }


}

