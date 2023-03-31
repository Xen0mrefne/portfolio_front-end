import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Alert } from "../model/alert";
import { AlertService } from "./alert.service";
import { TokenService } from "./token.service";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {
    constructor(
        private tokenService: TokenService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let interceptedReq = req.clone();
        const token = this.tokenService.getToken();

        if (token !== null) {
            interceptedReq = req.clone({
                headers: req.headers.set("Authorization", "Bearer" + token)
            });
        }

        return next.handle(interceptedReq).pipe(
            tap({
                error: ({ error }) => {
                    if (error.status === 401) {
                        if(this.tokenService.getToken()) {
                            this.tokenService.logOut()
                        } else {
                            this.router.navigate(['login'])
                        }
                    }
                }
            })
        )
    }
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}]