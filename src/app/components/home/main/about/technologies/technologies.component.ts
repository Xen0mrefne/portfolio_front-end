import { Component, Input } from '@angular/core';
import { Tech } from 'src/app/model/tech';
import { TechType } from 'src/app/model/techType';
import { TechnologiesService } from 'src/app/service/technologies.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  frontTechs!: Tech[];
  backTechs!: Tech[];

  frontEndType: TechType = TechType.FRONTEND;
  backEndType: TechType = TechType.BACKEND;

  isLogged: boolean = false


  constructor (private techService: TechnologiesService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.getTechs();

    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getTechs(): void {
    this.techService.getAll().subscribe({next: data => {
      this.frontTechs = data.filter(tech => tech.techType === this.frontEndType)
      this.backTechs = data.filter(tech => tech.techType === this.backEndType)
    }
    })
  }

  addTech(tech: Tech): void {
    this.techService.save(tech).subscribe({next: data => {
      this.getTechs();
    }, error: ({error}) => {
      alert(error.message)
    }})
  }

  editTech(tech: Tech): void {
    this.techService.update(tech.id!, tech).subscribe({next: data => {
      this.getTechs();
    }, error: ({error}) => {
      alert(error.message)
    }})
  }
  

  deleteTech(tech: Tech): void {
    this.techService.delete(tech.id!).subscribe({next: data => {
      this.getTechs();
    }, error: ({error}) => {
      alert(error.message)
    }})
  }
}
