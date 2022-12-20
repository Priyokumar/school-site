import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private scrSizeSubject = new BehaviorSubject<string>("")
  scrSize = this.scrSizeSubject.asObservable()

  constructor() { }

  setScrSize(scr: string) {
    this.scrSizeSubject.next(scr)
  }

}
