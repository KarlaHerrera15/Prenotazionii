import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Per ngIf e ngFor
import { FormsModule } from '@angular/forms'; // Per ngModel nel form
import { HttpClient } from '@angular/common/http';
import { Prenotazione } from './models/prenotazione.model';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { DettagliPrenotazioneComponent } from './dettagli-prenotazione/dettagli-prenotazione.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ListaPrenotazioniComponent, DettagliPrenotazioneComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  vettorePrenotazioni: Prenotazione[] = [];
  prenotazioneSelezionata: Prenotazione | null = null;
  apiUrl = 'https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni';

  nuovaPrenotazione: Prenotazione = this.resetForm();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Punto 4: Caricamento iniziale
    this.http.get<Prenotazione[]>(this.apiUrl).subscribe(data => {
      this.vettorePrenotazioni = data;
    });
  }

  aggiungiPrenotazione() {
    // Punto 7: Chiamata POST (simulata dal server typicode)
    this.http.post<Prenotazione>(this.apiUrl, this.nuovaPrenotazione).subscribe(res => {
      this.vettorePrenotazioni.push({...this.nuovaPrenotazione});
      this.nuovaPrenotazione = this.resetForm();
    });
  }

  mostraDettagli(p: Prenotazione) {
    this.prenotazioneSelezionata = p;
  }

  private resetForm(): Prenotazione {
    return { nome: '', cognome: '', indirizzo: '', telefono: '', email: '', dataPrenotazione: '', oraPrenotazione: '' };
  }
}