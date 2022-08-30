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
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
import moment from "moment";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as FileSaver from "file-saver"

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
    startend: any;
    minEnd = new Date();
    max = new Date();
    start_date = null
    end_date = null
    dataSource = new MatTableDataSource();
    displayedColumns = [
        'TranID',
        'TranDate',
        'Sender',
        'Recipient',
        'Amount',
        'Email',
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
        private spinner: NgxSpinnerService,
        private _httpClient: HttpClient,
    ) {
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }


    ngOnInit(): void {
        // Get the data
        debugger;
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
        this.start_date = this.datepipe.transform(this.tranForm.controls['startDate'].value, 'dd-MM-yyyy');

    }

    OnchangeEndDate() {
        debugger
        //this.startend = this.tranForm.controls['startDate'].value;
        this.minEnd = this.tranForm.controls['endDate'].value;
        this.end_date = this.datepipe.transform(this.tranForm.controls['endDate'].value, 'dd-MM-yyyy')
    }
    getTransactions() {
        debugger
        let startDate :any =  this.datepipe.transform(this.tranForm.controls['startDate'].value, 'dd/MM/yyyy');
        let endDate :any = this.datepipe.transform(this.tranForm.controls['startDate'].value, 'dd/MM/yyyy');
        // startDate = new Date(startDate);
        // endDate = new Date(endDate);
        let obj = {
            "startDate":startDate,
            "endDate":endDate,
            "orderBy": 0
        }
        this.spinner.show();
        this.authService.getAllTransactions(obj).pipe(
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
            return "Pending"
        } else if (val == 1) {
            return "Approve"
        } else if (val == 2) {
            return "Not Approve"
        }
    }

    onCancel() {
        this.tranForm.reset();
    }

    downloadPdf() {
        let startDate :any =  this.datepipe.transform(this.tranForm.controls['startDate'].value, 'dd/MM/yyyy');
        let endDate :any = this.datepipe.transform(this.tranForm.controls['endDate'].value, 'dd/MM/yyyy');
        this._httpClient.get(environment.apiUrl+"api/Transactions/v1/TransactionReportPdf/withparams?", {
            responseType: 'blob',
            params: {
                startdate: startDate,
                enddate: endDate,
            }
        },).subscribe(res =>{
            this.toastrService.success("PDF Downloaded Successfully", 'Success');
            let blob = new Blob([res], { type: 'application/pdf' });
            let pdfUrl = window.URL.createObjectURL(blob);

            var PDF_link = document.createElement('a');
            PDF_link.href = pdfUrl;
            PDF_link.download = "Transactions Report.pdf";
            PDF_link.click();
        });

    }

}
