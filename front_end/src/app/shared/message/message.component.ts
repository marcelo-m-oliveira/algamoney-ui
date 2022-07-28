import { Component, Input } from '@angular/core'
import { FormControl } from "@angular/forms"

@Component({
  selector: 'app-message',
  template: `
    <p-message class="p-message-error" *ngIf="temErro()" severity="error" {{ text }}></p-message>
  `,
  styles: [`
    .p-message-error {
  padding: 3px;
  }`
  ]
})
export class MessageComponent {

  @Input() error: string = ''
  @Input() control: FormControl = new FormControl()
  @Input() text: string = ''

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty
  }

}
