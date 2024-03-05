import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isActive: boolean;
  @Input() title: string;
  @Input() text: string;
  @Output() modalChange = new EventEmitter();

  constructor() {
    this.isActive = false;
    this.title = '';
    this.text = '';
  }

  onModalHide() {
    this.modalChange.emit();
  }
}
