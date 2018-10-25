import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wall-modules-navigation-bar',
  templateUrl: './wall-modules-navigation-bar.component.html',
  styleUrls: ['./wall-modules-navigation-bar.component.css']
})
export class WallModulesNavigationBarComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  navigate(Page)
  {
    console.log(Page);
    this.router.navigate([Page],{relativeTo:this.route})
  }
}
