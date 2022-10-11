import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../model/menu.model';
import { BackendService } from './backend.serice';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private backend: BackendService) { }

 private _menuSource = new BehaviorSubject<Menu[]>([]);
 menu$ = this._menuSource.asObservable()
  getMenu() {
   this.backend.getMenu().subscribe((value) => {
    this._menuSource.next(value);
   })
  }
}
