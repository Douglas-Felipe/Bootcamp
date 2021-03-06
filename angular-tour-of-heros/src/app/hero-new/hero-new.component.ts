import { HeroService } from './../hero.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.css']
})
export class HeroNewComponent implements OnInit {
  // No componente hero-new iremos iniciar o heroi com um json em branco
  hero: Hero = {} as Hero;


  constructor(
    private location: Location,
    private service: HeroService
  ) { }

  ngOnInit(): void {
  }

  onGoBack() {
    this.location.back();
  }

  onSaved() {
    this.location.back();
    this.service.addHero(this.hero);
    console.log(this.hero);
  }

}
