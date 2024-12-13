import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  healthRecords: any[] = []; // Array untuk menyimpan data dari Firestore

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    // Memanggil data dari Firestore saat halaman diinisialisasi
    this.fetchHealthRecords();
  }

  fetchHealthRecords() {
    // Mengambil data dari koleksi Firestore 'healthRecords'
    this.firestore.collection('healthRecords').valueChanges().subscribe(data => {
      this.healthRecords = data;
    });
  }

  getAverage(field: string): number {
    const total = this.healthRecords.reduce((sum, record) => sum + record[field], 0);
    return total / this.healthRecords.length || 0;
  }

}
