import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ConfirmationService } from 'primeng/api'
import { MessagesModule } from "primeng/messages"
import { MessageModule } from "primeng/message"
import { MessageService } from "primeng/api"

import { MessageComponent } from "./message/message.component"


@NgModule({
  declarations: [
    MessageComponent,
  ],
  imports: [
    CommonModule,
    MessageModule,
    MessagesModule,
  ],
  exports: [
    MessageComponent,
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class SharedModule { }
