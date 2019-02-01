import { NgModule } from '@angular/core';

import { AtaskaitosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AtaskaitosSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AtaskaitosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AtaskaitosSharedCommonModule {}
