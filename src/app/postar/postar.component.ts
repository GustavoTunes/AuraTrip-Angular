import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css'],
})
export class PostarComponent {
  selectedFile: File | null = null;

  constructor(private fireStorage: AngularFireStorage) {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && this.isImageFile(file)) {
      this.selectedFile = file;
    } else {
      // Arquivo inválido, redefinir a seleção
      this.selectedFile = null;
      event.target.value = ''; // Limpar o valor do input
    }
  }

  isImageFile(file: File): boolean {
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return file && acceptedImageTypes.includes(file.type);
  }

  async confirmFile() {
    if (this.selectedFile) {
      const path = `${this.selectedFile.name}`;
      const uploadTask = await this.fireStorage.upload(path, this.selectedFile);
      const url = await uploadTask.ref.getDownloadURL();
      console.log(url);
    }
  }
}
