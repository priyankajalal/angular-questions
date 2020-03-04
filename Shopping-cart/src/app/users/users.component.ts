import {Component, OnInit} from '@angular/core';
import {CommonService} from "../services/common.service";
import {IUser} from "../models/user"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private commonService: CommonService) {
  }

  name: string;
  email: string;
  ssn: string;
  users: IUser[];

  newName: string;
  newEmail: string;
  newSsn: string;
  message: string = '';
  userData: IUser = {"name": "", "email": "", "ssn": "", id: 0}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.commonService.getData('/users').subscribe(res => this.setUsers(res));
    this.message = "";
  }

  setUsers(res) {
    this.users = res
  }

  deleteUser(user) {
    this.commonService.delete("/users", user.id).subscribe(res => {
        this.setResponse(res);
        this.users = this.users.filter(user => user.id != res["id"]);
      }
    )
  }

  addUser() {
    this.commonService.postData('/users', this.userData).subscribe(d => {
      this.setResponse(d)
      this.users.push(this.userData)
    });
  }


  updateUser(user) {
    this.commonService.postData(`/users/${user.id}`, user).subscribe(d => this.setResponse(d))
  }

  setResponse(d) {
    this.message = d.status;
    console.log(this.message)
  }


}
