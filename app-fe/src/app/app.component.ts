import { Component, OnInit } from '@angular/core';
import *	as	$ from 'jquery';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * @author Bruno Touron
 *
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router) {

  }

  sidebarToggle() {
    $('#sidebar').toggleClass('active');
  }

  ngOnInit(): void {
    console.log('Início app');
  }

}