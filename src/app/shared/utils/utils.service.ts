import {Injectable} from '@angular/core';
import {FuseConfirmationService} from "../../../@fuse/services/confirmation";

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(private fuseConfirmationService: FuseConfirmationService) {
    }

    getLoggedInUser(){
        return JSON.parse(sessionStorage.getItem('userData')).user;
    }


    openConfirmationDialog(title = 'Confirm to delete', message = 'Are you sure you want to remove this data permanently? <span class=\"font-medium\">This action cannot be undone!</span>') {
        return this.fuseConfirmationService.open({
            "title": title,
            "message": message,
            "icon": {
                "show": true,
                "name": "heroicons_outline:exclamation",
                "color": "warn"
            },
            "actions": {
                "confirm": {
                    "show": true,
                    "label": "Remove",
                    "color": "warn"
                },
                "cancel": {
                    "show": true,
                    "label": "Cancel"
                }
            },
            "dismissible": true
        });
    }
}

export const DateFormats = {
    parse: {
        dateInput: ['YYYY/MM/DD']
    },
    display: {
        dateInput: 'DD/MM/yyyy',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

