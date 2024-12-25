import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  voucher=false;
  rotate=false;
  hourglass=false;
  doubleTick=false;

overviewData=[{
  voucher:true,
  image:'../../../assets/images/voucher 1.svg',
  text:'open tickets',
  number:'270',
},
{
  rotate:true,
  image:'../../../assets/images/rotate-reverse_16497904 1.svg',
  text:'In progress tickets',
  number:'136',
},
{
  hourglass:true,
  image:'../../../assets/images/hourglass-sand-bottom 1.svg',
  text:'Pending tickets',
  number:'346',
},
{
  doubleTick:true,
  image:'../../../assets/images/double-tick 1.svg',
  text:'Closed tickets',
  number:'150',
}

]
}
