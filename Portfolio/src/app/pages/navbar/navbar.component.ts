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

  downloadCV(){
    console.log("Download pressed");

    // Load the PDF file from a URL
    let pdfUrl = 'assets/Bryan_Chavez_Resume.pdf';

    // Create a temporary link element
let link = document.createElement('a');

// Set the link's href to the PDF URL
link.href = pdfUrl;

// Set the download attribute to the file name
link.download = 'Bryan_Chavez_Resume.pdf';

// Trigger a click event on the link element to download the file
document.body.appendChild(link);
link.click();
document.body.removeChild(link);



  }







}
