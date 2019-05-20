import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'changeDetectionProject';

  p: any;
   data: any; // 3
  ngOnInit(): void {
      this.p = {
          firstname: 'Virat',     // Original data
          lastname: 'Kohli'
      };

      this.data = new BehaviorSubject(this.p); // 3
  }


changeName() {
  // this.p.firstname = 'Tejas'; // 1


  this.p = {              // 2 and 3
    firstname: 'Tejas',     // Mutated data
    lastname: 'Kulkarni'
  };
  this.data.next(this.p); // 3

  }
}
