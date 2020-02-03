import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  public color = 'warn';
  public mode = 'indeterminate';

  constructor() {
  }

  ngOnInit() {

  }

}
