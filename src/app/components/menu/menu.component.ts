import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Menu } from '../../model/menu.model';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  public menu: Menu[] = [];
  subscription: Subscription ;
  constructor(private menuService:MenuService) { 

    this.subscription = this.menuService.menu$.subscribe((data)=> 
    this.menu = data)
  }


  ngOnInit(): void {
    this.menuService.getMenu();
  }
  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
    
  }

}
