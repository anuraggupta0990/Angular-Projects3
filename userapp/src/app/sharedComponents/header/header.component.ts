// import { Component, ViewChild } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
// import { Router } from '@angular/router';
// import { MatToolbarModule } from '@angular/material/toolbar';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   @ViewChild('sidenav') sidenav!: MatSidenav;
//   isExpanded = true;
//   showSubmenu: boolean = false;
//   isShowing = false;
//   showSubSubMenu: boolean = false;


//   constructor(private router: Router) { }
//   mouseenter() {
//     if (!this.isExpanded) {
//       this.isShowing = true;
//     }
//   }

//   mouseleave() {
//     if (!this.isExpanded) {
//       this.isShowing = false;
//     }
//   }
//   navigateToInventoryManagement(){
//         this.router.navigate(['inventory/management']);
//      }
// }
