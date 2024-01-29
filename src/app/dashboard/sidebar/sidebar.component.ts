import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  navbarData = [
    // {
    //     routeLink: 'dashboard',
    //     icon: 'fal fa-home',
    //     label: 'Dashboard'
    // },
    {
      routeLink: 'notificaciones',
      icon: 'fa fa-pie-chart',
      label: 'Notificaciones'
    },
    {
      routeLink: 'pagos',
      icon: 'fa fa-list-ul',
      label: 'Pagos'
    },
    {
  
      routeLink: 'reportes',
      icon: ' fa fa-history',
      label: 'Reportes'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
