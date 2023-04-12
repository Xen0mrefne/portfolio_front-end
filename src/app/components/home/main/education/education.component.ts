import { Component } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { AlertService } from 'src/app/service/alert.service';
import { DegreeService } from 'src/app/service/degree.service';
import { TokenService } from 'src/app/service/token.service';
import { Degree } from '../../../../model/degree'
import { PersonService } from 'src/app/service/person.service';
import { LoaderType } from 'src/app/components/common/loader/loaderType';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  degrees!: Degree[];
  personId!: number;

  loading: boolean = true;
  card: LoaderType = LoaderType.card;
  isLogged: boolean = false;
  isAdmin: boolean = false;
  adding: boolean = false;
  editing: boolean = false;
  deleting: boolean = false;

  constructor(
    private degreeService: DegreeService,
    private tokenService: TokenService,
    private alertService: AlertService,
    private personService: PersonService
    ) { }

  selectedDegree!: Degree;

  ngOnInit(): void {
    this.loading = true
    this.adding = this.editing = this.deleting = false;
    this.personService.person$.subscribe({next: person => {
      this.personId = person.id;
      this.getDegrees();
    }})

    this.isLogged = this.tokenService.getToken() ? true : false;

    const authorities = this.tokenService.getAuthorities();

    this.isAdmin = authorities.includes("ROLE_ADMIN") ? true : false;
  }

  getDegrees():void {
    this.degreeService.getAll(this.personId).subscribe({next: data => {
      this.degrees = data;
      this.loading = false;
    }})
  }

  toggleAdd(): void {
    this.adding = !this.adding

    document.body.style.overflowY = this.adding ? "hidden" : "scroll"
  }

  addDegree(degree: Degree): void {
    this.degreeService.save(degree).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.toggleAdd();
      this.getDegrees();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error)
    }})
  }

  editDegree(degree: Degree): void {
    this.degreeService.update(degree.id!, degree).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.getDegrees();
      this.toggleEdit();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error)
    }})
  }

  deleteDegree(): void {
    this.degreeService.delete(this.selectedDegree.id!).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.getDegrees();
      this.toggleDelete();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error)
    }})
  }

  toggleEdit(degree?: Degree): void {
    this.editing = !this.editing;

    if (degree) {
      this.selectedDegree = degree
    }

    document.body.style.overflowY = this.editing ? "hidden" : "scroll"
  }

  toggleDelete(degree?: Degree): void {
    this.deleting = !this.deleting;

    if (degree) {
      this.selectedDegree = degree
    }

    document.body.style.overflowY = this.deleting ? "hidden" : "scroll"
  }

}
