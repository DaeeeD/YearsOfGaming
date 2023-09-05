import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opencritic-fetched',
  templateUrl: './opencritic-fetched.component.html',
  styleUrls: ['./opencritic-fetched.component.css']
})
export class OpencriticFetchedComponent {

  @Input() testOfTheYear: string = '';

}
