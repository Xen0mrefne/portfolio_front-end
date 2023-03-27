import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/model/person';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent {
  @Output() onConfirmEdit: EventEmitter<string> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<any> = new EventEmitter();
  @Input() person!: Person;

  photoUrl!: string;

  photo: string | ArrayBuffer | null = ""

  constructor (private storageService: StorageService) {}

  ngOnInit(): void {
    this.photoUrl = this.person.profileImage;
  }

  uploadImage(e: any): void {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result)
      this.photo = reader.result
      this.storageService.uploadImage("OMG", this.photo)
    }
    console.log(e.target)
  }

  onSubmit(): void {
    this.onConfirmEdit.emit(this.photoUrl)
  }

  closeModal(): void {
    this.onCancelEdit.emit();
  }

}
