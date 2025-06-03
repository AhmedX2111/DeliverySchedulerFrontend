# DeliverySchedulerFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# DeliverySchedulerFrontend

A single-page web application for call center agents to help customers schedule grocery deliveries based on cart contents and product-specific delivery constraints.

## Features
- Multi-select product input (In-Stock, Fresh Food, External)
- Fetches valid delivery time slots from backend API
- Visually highlights green (eco-friendly) delivery slots
- Displays all valid delivery slots, ordered by date and time
- Responsive, modern UI

## Product Types & Constraints
- **In-Stock Products:** Eligible for same-day delivery if ordered before 18:00
- **Fresh Food:** Eligible for same-day delivery if ordered before 12:00
- **External Products:** Must be ordered at least 3 days in advance, delivered Tuesday–Friday only
- **All deliveries:** Weekdays only, 1-hour slots between 08:00 and 22:00, up to 14 days in advance
- **Green Delivery:** Certain off-peak slots are flagged as green (e.g., 13:00–15:00, 20:00–22:00)

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd DeliverySchedulerFrontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the backend API (see backend README for instructions)
2. Start the frontend development server:
   ```bash
   ng serve
   ```
3. Open your browser and navigate to [http://localhost:4200](http://localhost:4200)

### Configuration
- The backend API URL is set in `src/app/services/delivery.service.ts` (default: `http://localhost:5162/api/delivery`).
- Update the URL if your backend runs on a different port.

## Usage
1. Select one or more products from the list.
2. Click **Get Available Delivery Slots**.
3. View all valid delivery slots. Green slots are highlighted.
4. Use the information to assist customers in scheduling their deliveries.

## Project Structure
- `src/app/app.component.*` — Main UI and logic
- `src/app/services/delivery.service.ts` — API communication
- `src/app/app.module.ts` — Angular module setup

## Customization
- To change green delivery slot hours, update the backend logic.
- To add more products, update both backend and frontend product lists.

## License
MIT

