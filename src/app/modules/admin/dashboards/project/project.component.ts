import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {ApexOptions} from 'ng-apexcharts';
import {ProjectService} from 'app/modules/admin/dashboards/project/project.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {DateFormats} from "../../../../shared/utils/utils.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AuthService} from "../../../../core/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs/operators";
import {TRANMODEL} from "../../../tranModel";

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    providers: [
        DatePipe,
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: DateFormats}

    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit, AfterViewInit {
    tranForm: FormGroup;
    data: any;
    tranLog: TRANMODEL;
    startend: Date;
    minEnd = new Date();
    start_date = null
    end_date = null
    dataSource = new MatTableDataSource();
    displayedColumns = [
        'TranID',
        'TranDate',
        'Amount',
        'Email',
        'Sender',
        'Recipient',
        'TranStatus'
    ]

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private _projectService: ProjectService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        public datepipe: DatePipe,
        private authService: AuthService,
        private toastrService: ToastrService,
        private spinner: NgxSpinnerService
    ) {
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }


    ngOnInit(): void {
        // Get the data
        this.createForm();
        this.getTransactions();
        // console.log("abc");
    }

    createForm() {
        this.tranForm = this._formBuilder.group({
                startDate: [""],
                endDate: [""],
                orderBy: [0],
            }
        );
    }


    minEndDate() {
        debugger
        this.minEnd = this.tranForm.controls['startDate'].value;
        this.start_date = this.datepipe.transform(this.tranForm.controls['startDate'].value, 'MM-dd-yyyy')
    }

    OnchangeEndDate() {
        debugger
        this.startend = this.tranForm.controls['endDate'].value;
        this.end_date = this.datepipe.transform(this.tranForm.controls['endDate'].value, 'MM-dd-yyyy')
    }

    getTransactions() {
        debugger
       // this.tranLog = Object.assign({}, this.tranLog, this.tranForm.value);
       //  if (this.tranLog.startDate = this.start_date ? this.start_date?.toString() : "") {
       //      this.tranLog.endDate = this.tranLog.startDate;
       //  }
        this.spinner.show();
        this.authService.getAllTransactions(this.tranForm.value).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        ).subscribe((response: any) => {
            if (response.isSuccess) {
                this.dataSource.data = response.data;
            } else {
                this.toastrService.error(response?.message, 'Error');
            }

        }, error => {
            this.toastrService.error(error.error.message);
        })
    }

    returnColor(val) {
        if (val == 0) {
            return "text-warning"
        } else if (val == 1) {
            return "text-success"
        } else if (val == 2) {
            return "text-danger"
        }
    }

    returnStatus(val) {
        if (val == 0) {
            return "pending"
        } else if (val == 1) {
            return "Approved"
        } else if (val == 2) {
            return "Not Approved"
        }
    }

    onCancel() {
        this.tranForm.reset();
    }

}
