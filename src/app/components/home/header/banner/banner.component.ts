import { Component } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { Person } from 'src/app/model/person';
import { AlertService } from 'src/app/service/alert.service';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  person!: Person;

  isLogged: boolean = false;
  bannerEdit: boolean = false;

  constructor(
    private personService: PersonService,
    private tokenService: TokenService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.bannerEdit = false;
    setTimeout(() => {
      this.getPerson();
    }, 2000)

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getPerson(): void {
    this.personService.getPersons().subscribe({
      next: data => {
        this.person = data[0]
      }
    })
  }

  toggleBannerEdit(): void {
    this.bannerEdit = !this.bannerEdit;

    document.body.style.overflowY = this.bannerEdit ? "hidden" : "scroll"
  }

  editBanner(newImage: {url: string, name: string}): void {
    const updatedPerson = {...this.person}
    updatedPerson.bannerImageUrl = newImage.url;
    updatedPerson.bannerImageName = newImage.name;

    this.personService.update(this.person.id!, updatedPerson).subscribe({
      next: data => {
        this.alertService.setAlert(new Alert(data.message, false))
        this.toggleBannerEdit();
        this.getPerson();
      }, error: ({ error }) => {
        this.alertService.setAlert(new Alert(error.message, false))
        console.log(error);
      }
    })
  }

}
