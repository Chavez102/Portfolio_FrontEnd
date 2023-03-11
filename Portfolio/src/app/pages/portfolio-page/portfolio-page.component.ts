import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor() { }

  projects=[
    {
      title:'Revature Social Media',
      description:'A social media app is an online platform that enables users to create and share content, connect with others.',
      color: '#2F718D'
    },
    {
      title:'Banking System',
      description:'Application that allows users to perform various financial transactions, including checking account balances, transferring funds and managing their accounts.',
      color: '#7C3669'
    },
    {
      title:'ERS',
      description:'Expense Reimbursement System is a software application designed to streamline the process of reimbursing employees for business-related expenses  by providing a centralized platform for submitting, reviewing, and approving expense reports.',
      color: '#843737'
    },
    {
      title:'College Navigator',
      description:'Android app that retrieves college data from a third-party API and stores it in a Firebase database, enabling users to easily access the information.',
      color: '#817A40'
    },
    {
      title:'Stock Analyzer',
      description:'Java desktop application that allows users to search and analyze 20 years of daily stock information by generating a graphical representation of selected date ranges. The project involved implementing data parsing and visualization features.',
      color: '#52793A'
    },
    {
      title:'Quizard',
      description:'Java desktop application that allows users to search and analyze 20 years of daily stock information by generating a graphical representation of selected date ranges. The project involved implementing data parsing and visualization features.',
      color: '#1A6267'
    },



  ];





  ngOnInit(): void {
  }

}
