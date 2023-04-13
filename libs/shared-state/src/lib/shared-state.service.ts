import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedStateService {
  private readonly sharedEmojiText$ = new BehaviorSubject<string>(
    '🧬👀💙📗📗💙👀🧬'
  );
  public readonly emojiText = this.sharedEmojiText$.asObservable();

  changeState(text: string) {
    this.sharedEmojiText$.next(`🧬👀💙📗${text}📗💙👀🧬`);
  }
}
