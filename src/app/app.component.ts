import { Component, OnInit } from '@angular/core';
import { DeliveryService, Product, DeliverySlot } from './services/delivery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [
    { id: 'a0f47a90-5fc4-4f31-bbb9-0f5f4a0a98e3', name: 'Milk', type: 'FreshFood' },
    { id: 'b1c25c1f-9dc5-4cd1-9a17-89099e1ad1e6', name: 'Soap', type: 'InStock' },
    { id: 'c2d57d4a-3e25-4a2b-a2e2-29c72a29b8e9', name: 'Imported Cheese', type: 'External' }
  ];
  
  selectedProducts: string[] = [];
  slots: DeliverySlot[] = [];
  loading = false;
  error: string | null = null;

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {}

  toggleSelection(productId: string, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedProducts.push(productId);
    } else {
      this.selectedProducts = this.selectedProducts.filter(id => id !== productId);
    }
  }

  fetchSlots(): void {
    if (this.selectedProducts.length === 0) {
      this.error = 'Please select at least one product';
      return;
    }

    this.loading = true;
    this.error = null;
    this.slots = [];

    this.deliveryService.getAvailableSlots(this.selectedProducts)
      .subscribe({
        next: (slots) => {
          this.slots = slots;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to fetch delivery slots. Please try again.';
          this.loading = false;
          console.error('Error fetching slots:', err);
        }
      });
  }
}
