import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
tableData=[{Status:'Open',Priority:'High'},{Status:'Pending',Priority:'Low'},{Status:'In progress',Priority:'Normal'},{Status:'Closed',Priority:'High'},{Status:'Pending',Priority:'Normal'},{Status:'Closed',Priority:'High'},{Status:'Open',Priority:'Normal'},{Status:'Closed',Priority:'Low'}]
}
