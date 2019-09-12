import { Component, OnInit } from '@angular/core';
import { VedantaService } from '../../services/vedanta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  responsedata;
  inboundlist = [];
  jsondatalist = [];
  total_port_stock_P1:number;
  total_port_stock_P2:number;
  total_transit_stock_P1:number;
  total_transit_stock_P2:number;

  constructor(private dataS:VedantaService) { }

  ngOnInit() {
    this.dataS.getData().subscribe(data => {
      console.log(data);
      this.responsedata = data;
      console.log(this.responsedata);
      this.inboundlist = data.success.inbound;
      console.log(data.success.inbound);
      console.log(this.inboundlist);
      if(!(data.success.inbound.Port_stock.Stock_Kspl_P1 == 'NA')){
      this.total_port_stock_P1 = data.success.inbound.Port_stock.Stock_Kspl_P1 + data.success.inbound.Port_stock.Stock_Gpl_P1 + data.success.inbound.Port_stock.vessel_Stock_Kspl_P1
      }
      else{
        this.total_port_stock_P1 = NaN;
      }
      if(!(data.success.inbound.Port_stock.Stock_Kspl_P2 == 'NA')){
      this.total_port_stock_P2 = data.success.inbound.Port_stock.Stock_Kspl_P2 + data.success.inbound.Port_stock.Stock_Gpl_P2 + data.success.inbound.Port_stock.vessel_Stock_Kspl_P2
      }
      else{
        this.total_port_stock_P2 = NaN;
      }
      if(!(data.success.inbound.Transit_Stock.Bulker_P1 == 'NA')){
      this.total_transit_stock_P1 = data.success.inbound.Transit_Stock.Bulker_P1 + data.success.inbound.Transit_Stock.Truck_P1 + data.success.inbound.Transit_Stock.Bulker_P1
      }
      else{
        this.total_transit_stock_P1 = NaN;
      }
      if(!(data.success.inbound.Transit_Stock.Bulker_P2 == 'NA')){
      this.total_transit_stock_P2 = data.success.inbound.Transit_Stock.Bulker_P2 + data.success.inbound.Transit_Stock.Truck_P2 + data.success.inbound.Transit_Stock.Bulker_P2
      }
      else{
        this.total_transit_stock_P2 = NaN;
      }
      console.log(this.inboundlist['Port_stock']);
      this.jsondatalist = data.success.latest.data.json_data;
      console.log(this.jsondatalist);
    });
    console.log(this.inboundlist);
  }

}
