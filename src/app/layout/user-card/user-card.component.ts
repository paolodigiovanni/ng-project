import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';
import { User } from 'src/app/models/user.model';
import { Utils } from 'src/app/utility/utils.utility';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  user?: User;
  userMenuSections: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.user = new User({
      "name": "Paolo",
      "surname": "Di Giovanni",
      "companyTitle": "CEO",
      "avatar": {
        // "imgUrl": "https://www.renovablesverdes.com/wp-content/uploads/2020/06/quokka-1024x768.jpg",
        // "bgUrl": "https://wallpaperaccess.com/full/1892783.jpg",
        "imgUrl": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "bgUrl": "https://wallpaperaccess.com/full/2969025.jpg"
      }
    });

    this.userMenuSections = [
      {
        "id": "group2",
        "label": "Group 2",
        "items": [
          { "id": "4", "label": "user menu item 4", "icon": "desktop_mac" },
          { "id": "3", "label": "user menu item 3", "icon": "cast" }
        ]
      },
      {
        "id": "group1",
        "label": "Group 1",
        "items": [
          { "id": "1", "label": "user menu item 1", "icon": "attachment" },
          { "id": "2", "label": "user menu item 2", "icon": "cloud_queue" }
        ]
      },
      {
        "id": "group3",
        "label": "Group 3",
        "items": [
          { "id": "5", "label": "user menu item 5", "icon": "phone_android" }
        ]
      }
    ];

    this.userMenuSections = Utils.sortBy(this.userMenuSections, "id");
    this.userMenuSections.map(userMenuSection => Utils.sortBy(userMenuSection?.items || [], "id"));
  }

}
