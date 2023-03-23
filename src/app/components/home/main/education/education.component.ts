import { Component } from '@angular/core';
import { DegreeService } from 'src/app/service/degree.service';
import { TokenService } from 'src/app/service/token.service';
import { Degree } from '../../../../model/degree'
import { DEGREES } from './degree_list';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  degrees!: Degree[];

  constructor(private degreeService: DegreeService, private tokenService: TokenService) { }

  isLogged: boolean = false;
  adding: boolean = false;

  ngOnInit(): void {
    this.getDegrees();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getDegrees():void {
    this.degreeService.getAll().subscribe({next: data => this.degrees = data})
  }

  toggleAdd(): void {
    this.adding = !this.adding
    if (this.adding) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  addDegree(degree: Degree): void {
    this.degreeService.save(degree).subscribe({next: data => {
      alert(data.message)
      this.toggleAdd();
      this.getDegrees();
    }, error: err => {
      alert(err.error.message)
      console.log(err)
      this.toggleAdd();
    }})
  }

  editDegree(degree: Degree): void {
    this.degreeService.update(degree.id!, degree).subscribe({next: data => {
      alert(data.message)
      this.getDegrees();
    }, error: err => {
      alert(err.error.message)
      console.log(err)
    }})
  }

  deleteDegree(degree: Degree): void {
    this.degreeService.delete(degree.id!).subscribe({next: data => {
      alert(data.message)
      this.getDegrees();
    }, error: err => {
      alert(err.error.message)
      console.log(err)
    }})
  }

}
