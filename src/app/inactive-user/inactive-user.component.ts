import {Component, OnInit} from '@angular/core';
import {SwitchServices} from "../services/switch.services";

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit{
  inactiveUsers:string[] = [];

  constructor(private switchUser : SwitchServices) {
  }

  ngOnInit() {

    this.inactiveUsers = this.switchUser.inactiveUsers;
  }
}
