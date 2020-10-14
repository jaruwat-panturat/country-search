import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.less']
})
export class CountryListComponent implements OnInit {

  countries: any[];
  filteredCountries: any[];

  constructor(private _countryService : CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    return this._countryService.getCountries().subscribe(
      data => this.onData(data),
      error => console.log(error),
      () => console.log('Request complete!')
    )
  }

  onData(data){
    this.countries = data;
    this.getFilteredCountries('');
  }

  getFilteredCountries(keyword: string): void{
    this.filteredCountries = this.countries.filter(
      country => country.name.toLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1
    ); 
  }
}
