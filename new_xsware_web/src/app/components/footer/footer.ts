import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [ 
      RouterLink,
      NgClass
    ],
    templateUrl: './footer.html',
    styleUrls: ['./footer.scss']
})
export class Footer implements OnInit {
    test : Date = new Date();

    constructor(private router: Router ) {}

    ngOnInit() {

    }
    getPath(){
      return this.router.url;
    }
}
