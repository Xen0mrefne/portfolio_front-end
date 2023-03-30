import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/model/person';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent {
  @Output() onConfirmEdit: EventEmitter<string> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<any> = new EventEmitter();
  @Input() person!: Person;
  @Input() prevImageUrl!: string;

  newImage: any;
  imageUrl!: string;


  constructor (private storageService: StorageService) {}

  ngOnInit(): void {
    this.imageUrl = this.person.bannerImage;
  }

  uploadImage(e: any): void {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result)
      this.newImage = reader.result
      this.storageService.uploadBannerImage(this.person.id! + "_" + Date.now(), this.newImage).then(url => {
        console.log(url);
        this.imageUrl = url;
      })
    }
  }

  onSubmit(): void {
    this.onConfirmEdit.emit(this.imageUrl)
  }

  closeModal(): void {
    this.onCancelEdit.emit();
  }
}
