import { Component, OnInit } from '@angular/core';
import { User } from "app/class/user";
import { HttpService } from "app/services/http.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private user: User = new User();
  private massage: string = "";
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  save() {
    this.httpService.addUser(this.user).then(user => {
      if (user) {
        this.user.id=user.id;
        this.httpService.users.push(this.user);//the server doesn't save, so I add it like this
        this.massage = `welcome ${this.user.title} ${this.user.body}`;
        setTimeout(x => { this.massage = ""; }, 2000);
        this.delete();
      }
    });
  }

  delete() {
    this.user = new User();
  }
}
