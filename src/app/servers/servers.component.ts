import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',                  // Element
  // selector: '[app-servers]',             // Attribute
  // selector: '.app-servers',              // Class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
