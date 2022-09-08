import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MessagesModule } from "primeng/messages"
import { MessageModule } from "primeng/message"

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
  ]
})
export class SharedModule { }
