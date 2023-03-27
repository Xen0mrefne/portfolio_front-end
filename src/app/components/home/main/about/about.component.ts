import { Component, OnInit } from '@angular/core';
import { LoaderType } from 'src/app/components/common/loader/loaderType';
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

  infoEdit: boolean = false;
  photoEdit: boolean = false;

  constructor(private personService: PersonService, private tokenService: TokenService) { }

  ngOnInit(): void {
    setTimeout(() => {
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
  }

  togglePhotoEdit(): void {
    this.photoEdit = !this.photoEdit;
  }

  getPerson(): void {
    this.personService.getPersons().subscribe({
      next: data => {
        this.person = data[0]
      }
    })
  }

  editPerson(person: Person): void {
    this.personService.update(person.id!, person).subscribe({
      next: data => {
        alert(data.message)
        this.toggleEdit();
        this.getPerson();
      }, error: ({ error }) => {
        console.log(error);
        alert(error.message)
      }
    })
  }

  editPhoto(photoUrl: string): void {

  }

}
