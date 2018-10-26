import { Component, OnInit } from '@angular/core';
import { ModelFilterBox } from '../model-filter-box';
import { FilterTypes } from '../filter-types';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {
  FilterType: FilterTypes[] = [{ value: 1, type: 'Request' }, { value: 2, type: 'Offer' }, { value: 3, type: 'Activity' }];
  ModelFilterBox = new ModelFilterBox('Offering', '', '', '', '', this.FilterType);
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  selectedValue: string[];
  constructor() {

  }
  CheckAdding() {
    console.log(this.selectedValue);
  }
  ngOnInit() {
    console.log('Hi');

  }

}
// class ModelFilterBoxComponent  {

//   constructor(
//     public Type: string,
//     public Search: string,
//     public FromLocation: string,
//     public ToLocation:string,
//     public Time: string
// ) {}

