import { Component, OnInit } from '@angular/core';
import { User } from "app/class/user";
import { HttpService } from "app/services/http.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private user: User = new User();
  private massage: string = "";
  constructor(private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];

    this.httpService.getUser(id)
      .then((user: User) => this.user = user);
  }

  edit() {
    this.httpService.addUser(this.user).then(user => {
      if (user) {
        this.massage = `${this.user.title} ${this.user.body} edit Successfully`;
        setTimeout(x => {
        this.massage = "";
          this.cancel();
        }, 2000);
      }
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
