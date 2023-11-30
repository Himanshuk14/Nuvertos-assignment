import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Compound } from 'src/app/interface/compound';
@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.css'],
})
export class CompoundListComponent {
  @Input() compound: Compound;
  @Output() onDeleteCompound: EventEmitter<Compound> = new EventEmitter();
  @Output() onEditCompound: EventEmitter<Compound> = new EventEmitter();

  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;

  onDelete(compound: Compound) {
    this.onDeleteCompound.emit(compound);
  }
}
