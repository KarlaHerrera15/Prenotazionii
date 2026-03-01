import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prenotazione } from '../models/prenotazione.model';

@Component({
  selector: 'app-dettagli-prenotazione',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dettagli-prenotazione.component.html',
  styleUrls: ['./dettagli-prenotazione.component.css']
})

export class DettagliPrenotazioneComponent {
  @Input() prenotazione!: Prenotazione;
}