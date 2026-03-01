export interface Prenotazione {
  nome: string;
  cognome: string;
  indirizzo: string;
  telefono: string;
  email: string;
  dataPrenotazione: string; // Campo usato dal nostro form
  oraPrenotazione: string;  // Campo usato dal nostro form
  data?: string;            // Campo che potrebbe arrivare dal server
  ora?: string;             // Campo che potrebbe arrivare dal server
}