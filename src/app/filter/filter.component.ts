import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterString = new EventEmitter<string>();
  @ViewChild('input', {static: false}) input: ElementRef;

  filter = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.filter.valueChanges.subscribe((value: string) => {
      this.filterString.emit(value);
    })
  }
}
