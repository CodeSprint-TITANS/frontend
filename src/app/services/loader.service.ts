import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private showLoaderSubject = new BehaviorSubject<boolean>(false);
  showLoader$: Observable<boolean> = this.showLoaderSubject.asObservable();

  show(): void {
    this.showLoaderSubject.next(true);
  }

  hide(): void {
    this.showLoaderSubject.next(false);
  }
}
