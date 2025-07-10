import { Component, inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sl-dev-engagement-panel';
  private auth = inject(Auth);

  constructor(private router: Router) { }

  ngOnInit() {

    onAuthStateChanged(this.auth, user => {
      if (user) {
        this.router.navigate(['/advice/1']);
      }
    });
  }
}
