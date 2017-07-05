import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  private opened = false;
  @Output() onSelfClose: EventEmitter<any>;

  constructor() {
    this.onSelfClose = new EventEmitter<any>();
  }

  openPopup() {
    this.opened = true;
    // document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.opened = false;
    // document.body.style.overflow = '';
  }

  selfClose() {
    this.closePopup();
    // document.body.style.overflow = '';
    if (this.onSelfClose) {
      this.onSelfClose.emit();
    }
  }

}
