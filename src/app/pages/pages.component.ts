import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { AppService } from './services/app.service';
import * as noticeActions from './noticias.actions';
import { isLoading, stopLoading } from '../shared/ui.actions';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  constructor(public appService: AppService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(isLoading());
    this.appService.getNotices().subscribe((res) => {
      this.store.dispatch(noticeActions.setItems({ items: res }));
      this.store.dispatch(stopLoading());
    });
  }
}
