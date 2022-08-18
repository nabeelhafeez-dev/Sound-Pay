import { ElementRef, NgZone, PipeTransform } from '@angular/core';
import { MarkdownService } from './markdown.service';
import * as i0 from "@angular/core";
export declare class MarkdownPipe implements PipeTransform {
    private elementRef;
    private markdownService;
    private zone;
    constructor(elementRef: ElementRef<HTMLElement>, markdownService: MarkdownService, zone: NgZone);
    transform(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkdownPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MarkdownPipe, "markdown">;
}
