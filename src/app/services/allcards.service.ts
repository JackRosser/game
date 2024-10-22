import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iMonster } from '../models/i-monsters';

@Injectable({
  providedIn: 'root'
})
export class AllcardsService {

  constructor(private http:HttpClient) { this.getAllCards()}

  urlAllCards:string = "http://localhost:3000/monsters"

private bhAllCards = new BehaviorSubject<iMonster[]>([])
allCard$ = this.bhAllCards.asObservable()
serviceArray!:iMonster[]


private getAllCards() {
  this.http.get<iMonster[]>(this.urlAllCards).subscribe(allCardList => {
    this.serviceArray = allCardList
    this.bhAllCards.next(allCardList)
  })
}

addNewCard(card:Partial<iMonster>) {
  this.http.post<iMonster>(this.urlAllCards, card).subscribe((newCard) => {
  this.serviceArray.push(newCard)
  this.bhAllCards.next(this.serviceArray)
})
}

editCard(card: Partial<iMonster>) {
  this.http.put<iMonster>(`${this.urlAllCards}/${card.id}`, card).subscribe((updatedCard) => {
    // Trova l'indice della carta da modificare nell'array locale
    const index = this.serviceArray.findIndex(c => c.id === card.id);

    if (index !== -1) {
      // Aggiorna la carta all'indice specificato
      this.serviceArray[index] = { ...this.serviceArray[index], ...card };
      this.bhAllCards.next(this.serviceArray);
    }
  });
}


deleteCard(id:number) {
  this.http.delete(`${this.urlAllCards}/${id}`).subscribe(() => {
    this.serviceArray = this.serviceArray.filter(card => card.id != id)
    this.bhAllCards.next(this.serviceArray)
  })
}

}
