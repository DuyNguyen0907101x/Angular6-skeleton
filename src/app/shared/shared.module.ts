import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextService } from './text/text.service';
import { HighlightDirective } from './highlight/highlight.directive';
import { HeadingComponent } from './heading/heading.component';
import { StudentFilterPipe } from './student-filter/student-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentFilterPipe, HighlightDirective, HeadingComponent, StudentFilterPipe],
  providers: [TextService],
  exports: [StudentFilterPipe, HighlightDirective, HeadingComponent]
})
export class SharedModule { }
