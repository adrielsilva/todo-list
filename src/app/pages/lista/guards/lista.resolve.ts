import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/storage.services';

@Injectable()
export class ListaResolveGuard implements Resolve<ListaResolveGuard> {
    constructor(private storage: StorageService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.storage.listaTarefas
    }
}