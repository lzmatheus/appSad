import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
public listar: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.listar().subscribe((data) => this.listar = data,
    (error) => console.log(console.log(error)
    ))
  }

}
