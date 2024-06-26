import { Component } from '@angular/core';
import { NavbarComponent } from "../../_components/navbar/navbar.component";
import { FooterComponent } from "../../_components/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class HomeComponent {

}
