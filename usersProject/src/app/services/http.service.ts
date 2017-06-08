import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from "app/class/user";

@Injectable()
export class HttpService {
  private usersUrl = 'http://jsonplaceholder.typicode.com/posts';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  public users:User[]=new Array<User>();

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUser(id): Promise<User>{
    return this.getUsers().toPromise().then(users=>users.concat(this.users).find(user=>user.id==id));
  }

  deleteUsers(user: User): Observable<User[]> {
    return this.http.delete(this.usersUrl+user.id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addUser(user: User): Promise<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.usersUrl, { user }, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
