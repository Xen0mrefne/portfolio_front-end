import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/model/person';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent {
  @Output() onConfirmEdit: EventEmitter<{url: string, name: string}> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<any> = new EventEmitter();
  @Input() person!: Person;

  

  newImage: any;
  previewImage: string = ""
  currentImageUrl!: string;
  currentImageName!: string;
  newImageUrl!: string;
  newImageName!: string;

  path: string = "users/profile/"


  constructor (private storageService: StorageService) {}

  ngOnInit(): void {
    if (this.person.profileImageUrl)
      this.previewImage = this.person.profileImageUrl;
      this.currentImageUrl = this.person.profileImageUrl;

    if (this.person.profileImageName)
      this.currentImageName = this.person.profileImageName;

  }

  uploadImage(e: any): void {
    
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result)
      this.newImageName = this.person.id! + "_" + Date.now()
      this.newImage = reader.result
      this.storageService.uploadImage(this.path, this.newImageName, this.newImage).then(url => {
        console.log(url);
        this.newImageUrl = url;
        this.previewImage = url;
      })
    }
  }

  onSubmit(): void {
    if(this.currentImageName) {
      console.log(this.currentImageName)
      this.storageService.deleteImage(this.path, this.currentImageName)
    }

    this.onConfirmEdit.emit({url: this.newImageUrl, name: this.newImageName})
  }

  closeModal(): void {
    if (this.newImageName) {
      this.storageService.deleteImage(this.path, this.newImageName)
    }

    this.onCancelEdit.emit();
  }

}
