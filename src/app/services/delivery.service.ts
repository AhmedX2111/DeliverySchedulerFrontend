import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  type: 'InStock' | 'FreshFood' | 'External';
}

export interface DeliverySlot {
  date: string;
  start: string;
  end: string;
  isGreen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private apiUrl = 'http://localhost:5162/api/delivery';

  constructor(private http: HttpClient) { }

  getAvailableSlots(productIds: string[]): Observable<DeliverySlot[]> {
    return this.http.post<DeliverySlot[]>(`${this.apiUrl}/slots`, productIds);
  }
} 