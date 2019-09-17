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
  LNJ = [];
  LNJ_LNJ:number = 0;
  LNJ_transit:number = 0;
  LNJ_JHRS:number = 0;
  KSPL = [];
  KSPL_KSPL:number = 0;
  KSPL_transit:number = 0;
  KSPL_JHRS:number = 0;
  // LNJrakes = {
  //   'transit':7,
  //   'V1':{
  //     'current_station': 'Brundmal',
  //     'Load_status':'L',
  //     'src':'P2',
  //     'destination':'LNJ'
  //   },
  //   'V2':{
  //     'current_station': 'Sason',
  //     'Load_status':'L',
  //     'src':'P2',
  //     'destination':'LNJ'
  //   },
  //   'V3':{
  //     'current_station': 'Bargarh Road',
  //     'Load_status':'E',
  //     'src':'P2',
  //     'destination':'LNJ'
  //   },
  //   'V4':{
  //     'current_station': 'Ambodala',
  //     'Load_status':'E',
  //     'src':'P2',
  //     'destination':'LNJ'
  //   },
  //   'V5':{
  //     'current_station': 'Badmal',
  //     'Load_status':'L',
  //     'src':'P2',
  //     'destination':'LNJ'
  //   },
  //   'V6':{
  //     'current_station': 'Loisingha',
  //     'Load_status':'L',
  //     'src':'P2',
  //     'destination':'LNJ'
  //   },
  //   'V7':{
  //     'current_station': 'Bissamcuttack',
  //     'Load_status':'E',
  //     'src':'P2',
  //     'destination':'LNJ'
  //   },
  //   'LNJ':0,
  //   'Jharsugada':0
  // }

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
      for(let key in this.jsondatalist){
          console.log(key);
          if(this.jsondatalist[key].current_station == "Brundamal "){
            this.LNJ.push({'LNJ':this.jsondatalist[key]});
            this.LNJ_LNJ += 1;
          }
          if(this.jsondatalist[key].current_station == "Bobbili Jn"){
            this.KSPL.push({'KSPL':this.jsondatalist[key]});
            this.KSPL_KSPL += 1;
          }
          if(this.jsondatalist[key].current_station == 'JHRS' && this.jsondatalist[key].destination == 'LNJ' ){
            this.LNJ.push({'JHRS':this.jsondatalist[key]});
            this.LNJ_JHRS += 1;
          }
          if(this.jsondatalist[key].current_station == 'JHRS' && this.jsondatalist[key].destination == 'KSPL' ){
            this.KSPL.push({'JHRS':this.jsondatalist[key]});
            this.KSPL_JHRS += 1;
          }
          if(this.jsondatalist[key].destination == 'LNJ' && this.jsondatalist[key].current_station !== "Brundamal "){
            this.LNJ.push(this.jsondatalist[key]);
            this.LNJ_transit += 1;
          }
          if(this.jsondatalist[key].destination == 'KSPL' && this.jsondatalist[key].current_station !== "Bobbili Jn" ){
            this.KSPL.push(this.jsondatalist[key]);
            this.KSPL_transit += 1;
          }
      }
      console.log(this.LNJ);
      console.log(this.KSPL);

      document.getElementById('load').style.visibility="hidden";
      document.getElementById('contents').style.visibility="visible";

      
      
      //console.log(this.jsondatalist);
      //console.log(this.jsondatalist['VED-1']);
    });
    //console.log(this.inboundlist);
    //console.log(this.LNJrakes);
  }

}
