import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackEndAPIService } from 'src/app/services/back-end-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private BackeEndAPI :BackEndAPIService
  ) { }

  response: string = "no response";

  ngOnInit(): void {
    this.BackeEndAPI.getResponse().subscribe(
			(res: any) => {
				this.response = res.body.message;
        console.log(res);
				
			},
			(err) => {
				console.log(err);
			}
		);




  }







}
