import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class ChatService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private chatUrl = 'api/chat';

  constructor(private http: Http) {}

  getMessages(): Promise<any> {
    return;
  }
}
