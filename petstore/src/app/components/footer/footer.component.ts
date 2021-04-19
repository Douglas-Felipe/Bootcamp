import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { Parameters } from './../../interfaces/parameters';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  parameters: Parameters;

  imagesUrl: object = {
    "Facebook": 'https://imobzi.storage.googleapis.com/image/redes-sociais/facebook_gray.svg',
    "LinkedIn":'https://imobzi.storage.googleapis.com/image/redes-sociais/linkedin_gray.svg',
    "Youtube" : "https://imobzi.storage.googleapis.com/image/redes-sociais/youtube_gray.svg",
    "Instagram": "https://imobzi.storage.googleapis.com/image/redes-sociais/instagram_gray.svg",
    "WhatsApp": "https://imobzi.storage.googleapis.com/image/redes-sociais/whatsapp_gray.svg"
  };
  socialUrls: object = {
    "Instagram": "https://instagram.com/",
    "Youtube": "https://youtube.com/",
    "Facebook": "https://facebook.com/",
    "LinkedIn": "https://br.linkedin.com/"
  }

  constructor( private parametersServive: ParametersService ) { }

  ngOnInit(): void {
    this.getParameters();
  }

  getParameters(): void {
    this.parametersServive.getParameters().subscribe(parameters => this.parameters = parameters);
  }

}
