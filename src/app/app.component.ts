import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PROJECT';

  loadedFeature: string = 'recipes';

  onNavigate(recievedFeature: string) {
    this.loadedFeature = recievedFeature;
  }
}
