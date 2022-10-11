import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Menu } from '../model/menu.model';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    constructor(private http: HttpClient) {

    }

    getMenu():Observable<Menu[]> {
        return this.http.get("assets/menu.json").pipe(map((result) => result as Menu[]))
    }
}