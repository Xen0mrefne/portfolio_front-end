import { Component } from '@angular/core';
import { Person } from 'src/app/model/person';
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

  editBanner(imageUrl: string): void {
    const updatedPerson = {...this.person}
    updatedPerson.bannerImage = imageUrl;

    this.personService.update(this.person.id!, updatedPerson).subscribe({
      next: data => {
        alert(data.message)
        this.toggleBannerEdit();
        this.getPerson();
      }, error: ({ error }) => {
        console.log(error);
        alert(error.message)
      }
    })
  }

}
