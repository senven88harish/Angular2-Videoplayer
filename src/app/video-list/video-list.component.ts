import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo', 'SearchedVideo']
})
export class VideoListComponent implements OnInit {
  public SelectVideo = new EventEmitter();
  public SearchedVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

  OnSearchVideo(keyword){
    this.SearchedVideo.emit(keyword);
  }

}
