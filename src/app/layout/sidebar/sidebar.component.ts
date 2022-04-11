import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';
import { Utils } from 'src/app/utility/utils.utility';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarSections: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {

    this.sidebarSections = [
      {
        "id": "section2",
        "label": "section 2",
        "items": [
          { "id": "4", "label": "menu item 4", "icon": "desktop_mac" },
          { "id": "3", "label": "menu item 3", "icon": "cast" }
        ]
      },
      {
        "id": "section1",
        "label": "section 1",
        "items": [
          { "id": "1", "label": "menu item 1", "icon": "attachment" },
          { "id": "2", "label": "menu item 2", "icon": "cloud_queue" }
        ]
      },
      {
        "id": "section3",
        "label": "section 3",
        "items": [
          { "id": "5", "label": "menu item 5", "icon": "phone_android" }
        ]
      }
    ];

    this.sidebarSections = Utils.sortBy(this.sidebarSections, "id");
    this.sidebarSections.map(sidebarSection => Utils.sortBy(sidebarSection?.items || [], "id"));
  }

}
