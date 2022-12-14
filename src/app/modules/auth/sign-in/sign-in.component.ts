import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import {NgxSpinnerService} from "ngx-spinner";
import {MatDialog} from "@angular/material/dialog";

import {finalize} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    styleUrls: ['./sign-in.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private spinner: NgxSpinnerService,
        private toastrService: ToastrService,
        private matDialogRef: MatDialog,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            rememberMe: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        debugger
        if (this.signInForm.invalid) {
            return;
        }
        this.showAlert = false;
        this.spinner.show();
        this._authService.signIn(this.signInForm.value).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        ).subscribe(
                (response: any) => {
                    if (response.isSuccess) {

                        sessionStorage.setItem('access_token',response.token)
                        debugger;
                        const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                        this._router.navigateByUrl(redirectURL).then(() => {
                        });
                        this.toastrService.success("login Successfully!", 'Success');
                    } else {
                       this.toastrService.error(response.message, 'Error')
                        this.alert = {
                            type: 'error',
                            message: response.message
                        }
                        this.showAlert = true;
                        response = null;
                    }
                },
                (response) => {
                    this.toastrService.error(response.message, 'Error')
                    this.alert = {
                        type: 'error',
                        message: response.message
                    };
                    this.showAlert = true;
                    response = null;
                }
            );
    }
}
