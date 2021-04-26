import { Component, OnInit } from '@angular/core';
import { faAddressCard, faBars, faHome, faReceipt, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faHome = faHome;
  faProducts = faReceipt;
  faAboutUs = faUsers;
  faContact = faAddressCard;
  faHamburger = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
