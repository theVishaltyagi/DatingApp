import { AccountService } from './_Services/account.service';
import { Component,OnInit } from '@angular/core';
import { User } from './_Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';

  constructor(private accountService : AccountService){}

  ngOnInit(): void {
    
    this.setCurrentUser();
  }



  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user : User =JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

  
}
