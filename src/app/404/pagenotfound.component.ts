import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagenotfound',
    template: `<div class="error">
    <span >404 Error</span>
    <span>Page Not Found</span>
</div>`,
styles: ['.error {display: flex; justify-content: center; flex-direction: column; align-content: center; height: 100%; align-items: center; }',
'.error span {font-size: large;}']
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
