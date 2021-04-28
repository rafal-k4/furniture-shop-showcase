import { Component, HostListener, OnInit } from '@angular/core';
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

  showSideNavbar = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:click", ["$event"])
  handler_name(event: PointerEvent) {
    if(this.isClickOutsideSidebarNav(event))
      this.showSideNavbar = false;
  }

  toggleFixedNavbar() {
    this.showSideNavbar = !this.showSideNavbar;
  }

  private isClickOutsideSidebarNav(event: PointerEvent): boolean {
    const eventTarget = event.target as Element;
    
    const hamburgerBtnSelector = '.hamburger-btn'
    const isHamburgerBtnClicked = !!eventTarget.closest(hamburgerBtnSelector);

    const sidebarSelector = '.nav-list.open'
    const isOutsideSidebarClicked = !eventTarget.closest(sidebarSelector);

    return isOutsideSidebarClicked && !isHamburgerBtnClicked
  }
}
