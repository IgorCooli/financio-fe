import {Component, OnInit} from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {User} from "../model/LoginModel";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{

    valCheck: string[] = ['remember'];
    user: User;

    password: string;

    constructor(public layoutService: LayoutService) {

    }

    ngOnInit(): void {
        this.user = new User();
    }

    public efetuarLogin(): void{

    }


}
