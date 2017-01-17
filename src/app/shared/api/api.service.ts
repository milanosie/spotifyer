import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from '../auth/auth.http';
import { User } from '../models/index';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';


@Injectable()
export class ApiService {

  public searchArtists: any;
  constructor(private authHttp: AuthHttp) { }

  public getArtistsByName(searchstring: string): Observable<any> {
    return this.authHttp.get(`/search?q=${searchstring}&type=artist`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }



  private handleError(error: any) {
    let errMsg = (error['_body']) ? error['_body'] :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
