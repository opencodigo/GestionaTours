import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/principal', title: 'Principal',  icon: 'dashboard', class: '' },
    { path: '/usuario', title: 'Mant. Usuarios',  icon:'person', class: '' },
    { path: '/AddProducto',title: 'Add Producto' , icon: 'content_paste', class: ''},
    { path: '/producto', title: 'Mant. Producto',  icon:'content_paste', class: '' },
    //{ path: '/AddTour',title: 'Add Tour' , icon: 'content_paste', class: ''},
    //{ path: '/tour', title: 'Mant. Tour',  icon:'library_books', class: '' },
    { path: '/reserva', title: 'Mant. Reserva',  icon:'content_paste', class: '' },
    { path: '/factura', title: 'Mant. Factura',  icon:'library_books', class: '' },
    { path: '/programa', title: 'Mant. Programación',  icon:'notifications', class: '' },
    { path: '/mantenimiento', title: 'REPORTAR AVERIAS',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
