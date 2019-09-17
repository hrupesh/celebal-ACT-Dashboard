import { Component, OnInit } from '@angular/core';
import { VedantaService } from '../../services/vedanta.service';


@Component({
  selector: 'app-caledarcomponent',
  templateUrl: './caledarcomponent.component.html',
  styleUrls: ['./caledarcomponent.component.css']
})
export class CaledarcomponentComponent implements OnInit {
  
  data = [];
  plant_details = [];
  stock = [];

  payload = {
    month:"7",
    year:2019
  }

  constructor(private calendarS:VedantaService) { }

  ngOnInit() {
    
    this.calendarS.getC(this.payload).subscribe(data => {
      this.data = data;
      this.plant_details = data.success.data.plant_details;
      this.stock = data.success.data.stock;
      console.log(this.data);
      console.log(data);
      console.log(this.plant_details);
      console.log(this.stock);
      document.getElementById('load').style.visibility="hidden";
      document.getElementById('contents').style.visibility="visible";
    });
  }

  onSubmit(){
    this.calendarS.getC(this.payload).subscribe(data => {
      this.data = data;
      this.plant_details = data.success.data.plant_details;
      this.stock = data.success.data.stock;
      console.log(this.data);
      console.log(data);
      console.log(this.plant_details);
      console.log(this.stock);
      document.getElementById('load').style.visibility="hidden";
      document.getElementById('contents').style.visibility="visible";
    });
  }

}
