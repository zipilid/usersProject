import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/services/http.service";
import { User } from "app/class/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private users: User[];

  constructor(private httpService: HttpService,
  private router: Router) {
    this.httpService.getUsers().subscribe(users => {
      this.users = users.concat(this.httpService.users);
    });
  }
   onSelect(user: User) {
    this.router.navigate(['/user-details', user.id]);
  }

  ngOnInit() {
  }

}
