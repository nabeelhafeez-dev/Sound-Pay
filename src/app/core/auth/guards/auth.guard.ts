import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad, NavigationStart,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from 'app/core/auth/auth.service';
import {switchMap} from 'rxjs/operators';
import {AuthUtils} from '../auth.utils';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        public _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.activateRoutes(state.url);
        // return  true;
    }

    /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.activateRoutes(state.url === '/sign-out' ? '/' : state.url);

    }

    /**
     * Can load
     *
     * @param route
     * @param segments
     */
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.activateRoutes('/');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @param redirectURL
     * @private
     */
    private _check(redirectURL: string): Observable<boolean> {
        // Check the authentication status
        debugger;
        return this._authService.check()
            .pipe(
                switchMap((authenticated) => {
                    // If the user.ts is not authenticated...
                    debugger;
                    if (!authenticated) {
                        // Redirect to the sign-in page
                        this._router.navigate(['sign-in'], {queryParams: {redirectURL}});

                        // Prevent the access
                        return of(false);
                    }

                    // Allow the access
                    return of(true);
                })
            );
    }

    private getSessionToken(): Boolean {
        debugger;
        let access_token = sessionStorage.getItem('access_token')?? '';
        if (access_token) {
            return true;
        }
        return false;
    }

    private activateRoutes(route: string) {
        debugger;
        if (this.getSessionToken()) {
            if (route == '/') {
                this._router.navigate(['dashboard/transactions']);
            }
            return of(true);
        } else {
            this._router.navigate(['sign-in'], {queryParams: {route}});

            // Prevent the access
            return of(false);
        }
    }

    private checkIfAccess() {
        this._router.events.subscribe((_event: any) => {
            if (_event instanceof NavigationStart) {
                if(_event?.url) {
                    if(!_event?.url.includes("sign-out")) {
                        const user = sessionStorage.getItem("userData");//fetchUser from session
                        if(user) {
                            let ismatch = false
                            let userData = JSON.parse(user);
                            userData.activities[0]?.forEach(item => {
                                let childURl = item?.activity_url?.includes(_event?.url);
                                if (childURl) {
                                    ismatch = true;
                                }
                            })
                            _event.url = _event.url.replace('%23', '#');
                            if (!ismatch) {
                                if (!_event?.url.includes('dashboard/transactions')) {
                                    var route= '/'
                                    this._router.navigate(['dashboard/transactions'], {queryParams: {route}});
                                }
                            }
                        }
                    }
                }
            }
        })
    }
}
