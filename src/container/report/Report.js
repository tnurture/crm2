import React, { Component } from 'react';
import StyleCss from  './Report.css';
// import Grid from '@material-ui/core/Grid';
import { AgGridReact } from 'ag-grid-react';
import  'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import 'ag-grid/dist/styles/ag-theme-material.css';
import RowDetail from '../../components/tableRowDetail/RowDetail';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Search from '../../components/search/Search';
class Report extends Component {
  SearchDV="";
  agGridContainerClasses=[StyleCss.agGridContainer];
state={
    columnDefs: [
      {headerName: "Make", field: "make"},
      {headerName: "Model", field: "model"},
      {headerName: "Price", field: "price"},
      {headerName: "Price1", field: "price1"},
      {headerName: "Price2", field: "price2"},
      {headerName: "Price3", field: "price3"}
  
  ],
  
  rowData: [
      {make: "Toyota", model: "Celica1", price: 135000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota1", model: "Celica2", price: 325000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota2", model: "Celica3", price: 35000, price1: 5000,price2: 35000,price3: 35000},
      {make: "Toyota3", model: "Celica4", price: 345000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota4", model: "Celica", price: 35000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota5", model: "Celica6", price: 35000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota6", model: "Celica", price: 325000, price1: 45000,price2: 35000,price3: 35000},
      {make: "Toyot7a", model: "Celica", price: 35000, price1: 75000,price2: 35000,price3: 35000},
      {make: "Toyota8", model: "Celica", price: 35000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota", model: "Celica1", price: 135000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota1", model: "Celica2", price: 325000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota2", model: "Celica3", price: 35000, price1: 5000,price2: 35000,price3: 35000},
      {make: "Toyota3", model: "Celica4", price: 345000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota4", model: "Celica", price: 35000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota5", model: "Celica6", price: 35000, price1: 35000,price2: 35000,price3: 35000},
      {make: "Toyota6", model: "Celica", price: 325000, price1: 45000,price2: 35000,price3: 35000},
      {make: "Toyot7a", model: "Celica", price: 35000, price1: 75000,price2: 35000,price3: 35000},
      {make: "Toyota8", model: "Celica", price: 35000, price1: 35000,price2: 35000,price3: 35000},
  ],
  rowSelection: "single",
  tableRowDetailOpen:false,
  gridDetailData:[],
  tabvalue: 0,
  name: 'Composed TextField',
  searchBoxState:false
  }
  tabChangeHandler = (event, tabvalue) => {
    this.setState({ tabvalue:tabvalue });
  };
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  detailRowCloseHandler=()=>{
    this.setState(state => ({ tableRowDetailOpen: false}));
    this.agGridContainerClasses.pop(StyleCss.expanded)
  }
  // search input feild handler
  inputChangeHandler = event => {
    this.setState({ name: event.target.value });
  };

// search btn handler
searchHandler=event=>{
  this.setState({ searchBoxState: false});

}
openSearchBox=event=>{
  this.setState({ searchBoxState: true});
}

 onSelectionChanged(event) {
  
     var selectedRows = this.gridApi.getSelectedRows();
    // var selectedRowsString = "";
    // selectedRows.forEach(function(selectedRow, index) {
    //   if (index !== 0) {
    //     selectedRowsString += ", ";
    //   }
    //   selectedRowsString += selectedRow.athlete;
    // });
   this.agGridContainerClasses= [StyleCss.agGridContainer, StyleCss.expanded];
   console.log(this.agGridContainerClasses);
    this.setState(state => ({ tableRowDetailOpen: true, gridDetailData: selectedRows}));
  }
  render() {
   let tableRowDetail="";
if(this.state.tableRowDetailOpen){
  tableRowDetail=( <div className={StyleCss.tableRowDetailConatiner}>
 <RowDetail tabvalue={this.state.tabvalue} tabChangeHandler={this.tabChangeHandler} detailRowCloseHandler={this.detailRowCloseHandler} gridDetailData={this.state.gridDetailData}></RowDetail>
  </div>)
}
 
if(this.state.searchBoxState){
  this.SearchDV=( <Search heading="Search Here" searchHandler={this.searchHandler} inputChangeHandler={this.inputChangeHandler}  />)
}
else{
  this.SearchDV="";
}


   return (
     <div>
     {this.SearchDV}
     <div className={StyleCss.SearchSec}>
     <h2>Reports</h2>
     <Button variant="fab" color="secondary" onClick={this.openSearchBox} aria-label="Edit">
        <SearchIcon/>
      </Button></div>
      <div className={this.agGridContainerClasses.join(' ')}>
      <div className={StyleCss.gridSec}>
   <div style={{ height: '60vh', width:'100%'}} className="ag-theme-balham">
   <AgGridReact
   columnDefs={this.state.columnDefs}
   rowSelection={this.state.rowSelection}
   onGridReady={this.onGridReady.bind(this)}
   onSelectionChanged={($event)=>this.onSelectionChanged($event)}
   rowData={this.state.rowData}>
   </AgGridReact>
</div></div>

{tableRowDetail}


 </div>
 </div>
    );
  }
}

export default Report;

