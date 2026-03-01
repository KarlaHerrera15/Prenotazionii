import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotazione } from './models/prenotazione.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prenotazioni';
  prenotazioni: Prenotazione[] = [];

constructor(private http: HttpClient) {}

ngOnInit() {
  this.http.get<Prenotazione[]>(
    'https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni'
  ).subscribe(data => {
    this.prenotazioni = data;
  });
}
}
