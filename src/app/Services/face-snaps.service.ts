import { Injectable } from '@angular/core';
 import { facesnap } from '../models/face-snap.module';
 
 @Injectable({
 providedIn: 'root'
 })
 export class FaceSnapsService {
 faceSnaps: facesnap[] = [
 // vos FaceSnap ici
 ]
 faceSnapsService: any;
 ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
    }
}