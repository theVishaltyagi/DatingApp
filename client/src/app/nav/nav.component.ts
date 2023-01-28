import { AccountService } from './../_Services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_Models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountservice :AccountService) { }

  ngOnInit(): void {
   
  }

  login()
  {
    this.accountservice.login(this.model).subscribe({
      next : response => {
        console.log(response);
        
      },
      error:error => console.log(error)
    })
  }

  logout()
  {
    this.accountservice.logout();
  
  }

}
