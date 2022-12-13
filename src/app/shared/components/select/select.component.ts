import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() title: any = '';
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  detectrChanage(event: any) {
    this.selectedValue.emit(event)
  }
}
