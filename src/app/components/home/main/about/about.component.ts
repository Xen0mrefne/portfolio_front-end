import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  person!: Person;

  loading: boolean = true;
  spinner: LoaderType = LoaderType.spinner

  isLogged: boolean = false;
  isAdmin: boolean = false;
  infoEdit!: boolean;
  photoEdit!: boolean;

  constructor(
    private personService: PersonService,
    private tokenService: TokenService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.loading = true;

    this.infoEdit = this.photoEdit = false;
    
    this.personService.person$.subscribe({next: person => {
      this.person = person;
      this.loading = !this.person;
    }})

    this.isLogged = this.tokenService.getToken() ? true : false;

    const authorities = this.tokenService.getAuthorities();

    this.isAdmin = authorities.includes("ROLE_ADMIN") ? true : false;
  }

  toggleEdit(): void {
    this.infoEdit = !this.infoEdit;

    document.body.style.overflowY = this.infoEdit ? "hidden" : "scroll"
  }

  togglePhotoEdit(): void {
    this.photoEdit = !this.photoEdit;

    document.body.style.overflowY = this.photoEdit ? "hidden" : "scroll"
  }

  editPerson(person: Person): void {
    this.personService.update(person.id!, person).subscribe({
      next: data => {
        this.alertService.setAlert(new Alert(data.message, false))
        this.toggleEdit();
        this.onUpdate.emit();
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
        this.onUpdate.emit();
      }, error: ({ error }) => {
        this.alertService.setAlert(new Alert(error.message, true))
        console.log(error)
      }
    })
  }

}
