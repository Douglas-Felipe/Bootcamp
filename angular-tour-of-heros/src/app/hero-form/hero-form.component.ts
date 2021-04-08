import { HeroService } from './../hero.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero, HeroUniverse } from '../hero';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  // O input hero ira receber o heroi para a criação ou atualização, de acordo com a tela e a presença do atributo id
  @Input() hero:Hero;
  // O Output heroSaved ira ser emitido depois que o heroi for atualizado ou criado
  @Output() heroSaved: EventEmitter<void> = new EventEmitter<void>();
  // O Output goBack ira ser emitido se o usuário decidir voltar para a pagina anterior
  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();

  heroUniverses: Array<HeroUniverse> = [HeroUniverse.DC, HeroUniverse.MARVEL];

  constructor(
    private heroService: HeroService
  ) { }

  onGoBack(): void {
    this.goBack.emit();
  }

  save(): void {
    if(this.hero.id){
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.heroSaved.emit());
    }
    else {
      this.heroService.addHero(this.hero)
      .subscribe(() => this.heroSaved.emit());
    }
  }


}
