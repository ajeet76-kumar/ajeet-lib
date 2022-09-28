import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SyvenLayoutLibService {
  makeEditable = new Subject<any>();
  editdashboard = new Subject<any>();
  resetdash = new Subject<any>();
  rightreset = new Subject<any>();

  testBehavior: any = new BehaviorSubject(this.photo);

  set photo(value) {
    this.testBehavior.next(value);
  }

  get photo() {
    return this.testBehavior;
  }

  constructor(private http: HttpClient) {}

  makeEditableClicked() {
    return this.makeEditable.asObservable();
  }
  editdashboardclicked() {
    return this.editdashboard.asObservable();
  }
  setDashv4(message: boolean) {
    return this.resetdash.next({ ispinned: message });
  }
  getDashv4() {
    return this.resetdash.asObservable();
  }
  setrightnav(message: boolean) {
    return this.rightreset.next({ rightpinned: message });
  }
  getrightnav() {
    return this.rightreset.asObservable();
  }
}
