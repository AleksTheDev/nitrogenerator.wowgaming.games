import { Component } from '@angular/core';

@Component({
  selector: 'app-claim-nitro',
  templateUrl: './claim-nitro.component.html',
  styleUrls: ['./claim-nitro.component.scss'],
})
export class ClaimNitroComponent {
  imgLoading: boolean;

  constructor() {
    this.imgLoading = true;
  }
}
