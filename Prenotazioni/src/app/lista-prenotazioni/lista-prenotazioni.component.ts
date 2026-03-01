import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prenotazione } from '../models/prenotazione.model';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrls: ['./lista-prenotazioni.component.css']
})

export class ListaPrenotazioniComponent {
  @Input() prenotazioni: Prenotazione[] = [];
  @Output() selezionata = new EventEmitter<Prenotazione>();

  seleziona(p: Prenotazione) {
    this.selezionata.emit(p);
  }
}