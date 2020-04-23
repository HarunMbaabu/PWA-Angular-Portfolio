import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public Pwa: PwaService) {}
  installPwa(): void {
  this.Pwa.promptEvent.prompt();
}
}
