import { Component, OnInit } from '@angular/core';
import { cours } from '../model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
mesCours:cours[]=[
  {"id":1,"nom":"Java","vh":10},
  {"id":2,"nom":"TypeScript","vh":15},
  {"id":1,"nom":"CSS","vh":4}

]
  public formation:string="Full Stack"
  public tab : string[] = ["git","scrum","angular","spring"]

  constructor(private Produit:ProduitService) { }

  ngOnInit(): void {
  }

  info()
  {
    //alert ("Hello event")
    //this.test = !this.test
    this.Produit.infoProduit();
  }

}
