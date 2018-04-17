import {Component, OnInit} from '@angular/core';
import {GoogleSheetService, Parameters} from './services/google-sheet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  parameters: Parameters;
  constructor(private googleService: GoogleSheetService, private router: Router) {}

  ngOnInit() {
    this.googleService.getData().subscribe((data: Parameters) => {
      this.parameters = data;

      if (this.parameters.redirectTimeout && this.parameters.redirectUrl) {
        console.log('Will redirect to ', this.parameters.redirectUrl, ' in ', this.parameters.redirectTimeout);
        setTimeout(() => {
          console.log('redirect');
          // this.router.navigate([this.parameters.redirectUrl]);
          window.location.href = this.parameters.redirectUrl;
        }, parseInt(this.parameters.redirectTimeout, 10));
      }
    });
  }
}

