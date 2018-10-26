import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WallPageComponent } from './wall-page/wall-page.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { RequestComponent } from './request/request.component';
import { OfferingComponent } from './offering/offering.component';
import { componentFactoryName } from '@angular/compiler';
import { MembersListComponent } from './members-list/members-list.component';

import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
    {
        path: '',
        component: WallPageComponent,
    },
    {
        path: 'Wall',
        component: WallPageComponent,
        redirectTo: ''
    },

    {
        path: 'Chat',
        component: ChatListComponent
    },
    {
        path: 'Request',
        component: RequestComponent
    },
    {
        path: 'Offering',
        component: OfferingComponent
    }
    , {
        path: 'MembersList',
        component: MembersListComponent

    },

    {
        path: 'Community',
        component: CommunityComponent
    },
    {
        path: 'MyProfile',
        component: UserProfileComponent
    },
    {
        path: 'PostDetails',
        component: PostDetailsComponent
    }

];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule { }
export const routingComponents = [CommunityComponent, UserProfileComponent];
