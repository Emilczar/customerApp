import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu.model';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu: Menu[] = [];
  constructor(private menuService:MenuService) { 

    this.menuService.menu$.subscribe((data)=> 
    this.menu = data)
  }


  ngOnInit(): void {
    this.menuService.getMenu();
  }

}
