import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avatar } from 'src/app/models/avatar.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() companyName?: string;

  @Output() sidebarButtonClick: EventEmitter<any> = new EventEmitter<any>();

  avatar?: Avatar;

  constructor() { }

  ngOnInit(): void {
    this.avatar = {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    }
  }

}
