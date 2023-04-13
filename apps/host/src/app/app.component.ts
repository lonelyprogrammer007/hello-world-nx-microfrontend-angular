import { Component } from '@angular/core';
import { SharedStateService } from '@hello-world-nx/shared-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'hello-world-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host';
  emojiText$: Observable<string>;

  constructor(sharedStateService: SharedStateService) {
    this.emojiText$ = sharedStateService.emojiText;
  }
}
