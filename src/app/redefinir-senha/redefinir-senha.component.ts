import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redefinir(){
    this.router.navigateByUrl("/");
  }
}
