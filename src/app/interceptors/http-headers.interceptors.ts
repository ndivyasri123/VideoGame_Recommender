import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpHeadersInterceptors implements HttpInterceptor {
    constructor() { }
    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>> {
        req=req.clone({
            setHeaders:{
                'x-rapidapi-key': '2a9aff1eb5msh52fb4be37f5133fp16aa49jsne8158dfd2af3',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',
            },
            setParams:{
                key:'48357ddaacdc4130a7cc86986436d236'
            }
        }); 
        return next.handle(req);
    }
}