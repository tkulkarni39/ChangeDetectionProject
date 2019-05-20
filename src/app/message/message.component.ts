import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor() { }

  @Input() person;   // 1 and 2


//  @Input() person: Observable<any>;  // 3
//  info: any;

//   ngOnInit() {                      // 3
//     this.person.subscribe(data => {
//       this.info = data;
//     });
 // }

}
