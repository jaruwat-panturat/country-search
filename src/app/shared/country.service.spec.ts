import { TestBed } from '@angular/core/testing';
import { CountryService } from './country.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

describe('CountryService', () => {
  let service: CountryService;
  let httpTestCtrl:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ],
      providers : [
        CountryService
      ]
    });

    service = TestBed.get(CountryService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send http request to https://restcountries.eu/rest/v2/all', () => {
    service.getCountries().subscribe(countries => {
      let expected = [{
        name : "Afghanistan",
        region : "Asia",
        subregion : "Southern Asia",
        population : 27657145
      }] as any[];

      expect(countries).toEqual(expected);
    });

    let req = httpTestCtrl.expectOne('https://restcountries.eu/rest/v2/all');
    expect(req.request.method).toBe('GET');

    let mockUpRespone = [{
      name : "Afghanistan",
      region : "Asia",
      subregion : "Southern Asia",
      population : 27657145
    }] as any[];

    req.flush(mockUpRespone);
  });

  
});
