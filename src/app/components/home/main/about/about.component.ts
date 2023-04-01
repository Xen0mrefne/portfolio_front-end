import { Component, OnInit } from '@angular/core';
import { LoaderType } from 'src/app/components/common/loader/loaderType';
import { Alert } from 'src/app/model/alert';
import { AlertService } from 'src/app/service/alert.service';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
import { Person } from '../../../../model/person';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  person!: Person;

  spinner: LoaderType = LoaderType.spinner

  isLogged: boolean = false;
  loading: boolean = true;
  infoEdit: boolean = false;
  photoEdit: boolean = false;

  constructor(
    private personService: PersonService,
    private tokenService: TokenService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.infoEdit = this.photoEdit = false;
    setTimeout(() => {
      this.loading = true;
      this.getPerson();
    }, 2000)

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  toggleEdit(): void {
    this.infoEdit = !this.infoEdit;

    document.body.style.overflowY = this.infoEdit ? "hidden" : "scroll"
  }

  togglePhotoEdit(): void {
    this.photoEdit = !this.photoEdit;

    document.body.style.overflowY = this.photoEdit ? "hidden" : "scroll"
  }

  getPerson(): void {
    this.personService.getPerson().subscribe({
      next: data => {
        this.person = data[0]
        this.loading = false;
      }
    })
  }

  editPerson(person: Person): void {
    this.personService.update(person.id!, person).subscribe({
      next: data => {
        this.alertService.setAlert(new Alert(data.message, false))
        this.toggleEdit();
        this.getPerson();
      }, error: ({ error }) => {
        this.alertService.setAlert(new Alert(error.message, true))
        console.log(error)
      }
    })
  }

  editPhoto(newImage: {url: string, name: string}): void {
    const updatedPerson: Person = {...this.person}
    updatedPerson.profileImageUrl = newImage.url;
    updatedPerson.profileImageName = newImage.name

    this.personService.update(this.person.id!, updatedPerson).subscribe({
      next: data => {
        this.alertService.setAlert(new Alert(data.message, false))
        this.togglePhotoEdit();
        this.getPerson();
      }, error: ({ error }) => {
        this.alertService.setAlert(new Alert(error.message, true))
        console.log(error)
      }
    })
  }

}
