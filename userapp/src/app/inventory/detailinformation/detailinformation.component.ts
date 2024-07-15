import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailinformation',
  templateUrl: './detailinformation.component.html',
  styleUrls: ['./detailinformation.component.css']
})
export class DetailinformationComponent implements OnInit{


  productDetails: any[] = [];
  displayedColumns: string[] = ['image',
    'component', 'observationpoint', 'optype', 'worm', 
    'cracklength', 'crackmeas', 'crackseverity', 
    'startingdim', 'usedlimit', 'budgetlife', 'lifehours', 
    'lifetotal', 'inspectionDate', 'actions'
  ];

  ngOnInit() {
    this.productDetails = JSON.parse(localStorage.getItem('productDetails') || '[]');
  }

  deleteDetail(detail: any) {
    this.productDetails = this.productDetails.filter(d => d !== detail);
    localStorage.setItem('productDetails', JSON.stringify(this.productDetails));
  }
}
