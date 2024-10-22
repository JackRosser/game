import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iMonster } from '../models/i-monsters';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http:HttpClient) { this.getDeckCards()}

urlDeck:string = "http://localhost:3000/deckPlayer"

private bhDeck = new BehaviorSubject<iMonster[]>([])
deck$ = this.bhDeck.asObservable()
serviceArray!:iMonster[]


private getDeckCards() {
  this.http.get<iMonster[]>(this.urlDeck).subscribe((cardList) => {
  this.serviceArray = cardList
  this.bhDeck.next(cardList)
})

}

addCard(card:Partial<iMonster>) {
this.http.post<iMonster>(this.urlDeck, card).subscribe((newCard) => {
  this.serviceArray.push(newCard)
  this.bhDeck.next(this.serviceArray)
})
}

removeCard(id: number) {
  this.http.delete(`${this.urlDeck}/${id}`).subscribe(() => {
    this.serviceArray = this.serviceArray.filter(card => card.id !== id);
    this.bhDeck.next(this.serviceArray);
  });
}

}
