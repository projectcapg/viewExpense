import { Component, OnInit } from '@angular/core';
import { ViewService } from '../service/view.service';
import { ExpenseClaimed } from '../model/expense-claimed';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  myVar: boolean; 
  id:number;
  claim: ExpenseClaimed 
  constructor(private view : ViewService) { }

  ngOnInit() {
    
  }
  getExpenseDetails(id:String){
    this.view.getExpenseById(id).subscribe((data)=>{this.claim=data
    }, error => { alert("Expense Id Not Found") }
    );
  }

  


}
