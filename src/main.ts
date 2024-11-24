import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const config = {
  apiUrl: 'https://api.example.com',
  otherConfig: 'some value',
  providers: [] // Aquí añades tus proveedores, por ejemplo:
  // providers: [YourService]
};

const bootstrap = () => bootstrapApplication(AppComponent, config);
