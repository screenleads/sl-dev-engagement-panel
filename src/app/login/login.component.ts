import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  private auth = inject(Auth);
  private router = inject(Router);

  login() {
    setPersistence(this.auth, browserLocalPersistence)
      .then(() => signInWithEmailAndPassword(this.auth, this.email, this.password))
      .then(() => this.router.navigate(['/advice/1']))
      .catch(err => alert('Error de login: ' + err.message));

  }

  register() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => this.router.navigate(['/advice/1']))
      .catch(err => alert('Error al registrarse: ' + err.message));
  }
  loginWithGoogle() {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(() => signInWithPopup(auth, new GoogleAuthProvider()))
      .then(() => this.router.navigate(['/advice/1']))
      .catch(err => alert('Error con Google: ' + err.message));

  }
}