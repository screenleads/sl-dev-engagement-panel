import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule, NgIf],
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent {
  advice: any;
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://sl-dev-backend-7ab91220ba93.herokuapp.com/advices/${id}`)
      .subscribe(data => this.advice = data);
  }
}