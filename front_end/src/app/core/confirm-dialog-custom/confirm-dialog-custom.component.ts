import { Component } from '@angular/core'

@Component({
  selector: 'app-confirm-dialog-custom',
  template: `
    <p-confirmDialog icon="pi pi-question-circle" #confirmacao>
      <ng-template pTemplate="header">
        <h3>Confirmação</h3>
      </ng-template>
      <ng-template pTemplate="footer">
        <button type="button" pButton icon="pi pi-check" label="Sim"
                (click)="confirmacao.accept()">
        </button>
        <button type="button" pButton icon="pi pi-times" label="Não"
                (click)="confirmacao.reject()">
        </button>
      </ng-template>
    </p-confirmDialog>
  `,
  styles: [
  ]
})
export class ConfirmDialogCustomComponent {

}
