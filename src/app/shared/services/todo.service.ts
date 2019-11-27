import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private authService: AuthService, private firestore: AngularFirestore) { }

  addTodo(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("todo")
            .add(data)
            .then(res => resolve(res), err => reject(err));
    });
  }

  getTodos() {
    let userDetails = this.authService.getUserDetails();
    return this.firestore.collection("todo", ref => ref.where('user', '==', userDetails.uid)).snapshotChanges();
  }

  softDeleteTodo(data) {
    return this.firestore
       .collection("todo")
       .doc(data.id)
       .set({ isCompleted: data.isCompleted }, { merge: true });
  }

  removeTodo(id) {
    return this.firestore
       .collection("todo")
       .doc(id)
       .delete();
  }


}
