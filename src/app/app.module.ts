import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextOnlyCardComponentComponent } from './text-only-card-component/text-only-card-component.component';
import { FeedbackGeneralComponent } from './feedback-general/feedback-general.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CommunityNotificationListComponent } from './community-notification-list/community-notification-list.component';
import { WallNotificationComponent } from './wall-notification/wall-notification.component';
import { WallModulesNavigationBarComponent } from './wall-modules-navigation-bar/wall-modules-navigation-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardFromToLocationComponent } from './card-from-to-location/card-from-to-location.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { WallPageComponent } from './wall-page/wall-page.component';
import { MembersListComponent } from './members-list/members-list.component';
import { OfferingComponent } from './offering/offering.component';
import { RequestComponent } from './request/request.component';
import { ActivityComponent } from './activity/activity.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { WallComponent } from './wall/wall.component';
import { CNotifyOfferingComponent } from './cnotify-offering/cnotify-offering.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { CreatepostComponent } from './createpost/createpost.component';


import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';



@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: []
})
export class DemoMaterialModule {}
@NgModule({
  declarations: [
    AppComponent,
    TextOnlyCardComponentComponent,
    FeedbackGeneralComponent,
    CardHeaderComponent,
    CommunityNotificationListComponent,
    WallNotificationComponent,
    WallModulesNavigationBarComponent,
    NavbarComponent,
    CardFromToLocationComponent,
    routingComponents,
    WallPageComponent,
    MembersListComponent,
    OfferingComponent,
    RequestComponent,
    ActivityComponent,
    ChatListComponent,
    WallComponent,
    CNotifyOfferingComponent,
    FilterBoxComponent,
    PostDetailsComponent,
    CommentBoxComponent,
    CreatepostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
