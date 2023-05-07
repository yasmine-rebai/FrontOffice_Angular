import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CalendarOptions } from 'fullcalendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Connect4Aid';
  posts =[];
  calendarOptions!: CalendarOptions;
  constructor (private http: HttpClient){};

  handleDateClick(arg:any){
    alert('date click!'+ arg.dateStr);
  }
}
