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
      {headerName: "customer name", field: "customer_name", filter: "agNumberColumnFilter"},
      {headerName: "assigned to", field: "assigned_to", filter: "agNumberColumnFilter"},
      {headerName: "city", field: "city", filter: "agNumberColumnFilter"},
      {headerName: "primary contact", field: "primary_contact", filter: "agNumberColumnFilter"},
      {headerName: "status", field: "status", filter: "agNumberColumnFilter"},
      {headerName: "follow up", field: "follow_up", filter: "agNumberColumnFilter"},
      {headerName: "last contact", field: "last_contact", filter: "agNumberColumnFilter"}
  
  ],
  
  rowData: [
      {customer_name: "Ryman Healthcare", assigned_to: "Joe Russul", city: "New York", primary_contact: "simon cleland", status: "leads", follow_up: "19 July 2018", last_contact: "56 days ago"},
      {customer_name: "Fonterra", assigned_to: "Richard", city: "Taupo", primary_contact: "phil colis", status: "leads", follow_up: "15 July 2018", last_contact: "56 days ago"},
      {customer_name: "BestStart", assigned_to: "Joe Russul", city: "New York", primary_contact: "simon cleland", status: "Meeting Held", follow_up: "19 July 2018", last_contact: "16 days ago"},
      {customer_name: "Hamish hepbum", assigned_to: "Mike Hoyle", city: "Hamilton", primary_contact: "simon cleland", status: "leads", follow_up: "19 July 2018", last_contact: "86 days ago"},
      {customer_name: "Silver Firm", assigned_to: "Joe Russul", city: "New York", primary_contact: "phil colis", status: "Meeting Held", follow_up: "19 July 2018", last_contact: "26 days ago"},
      {customer_name: "City Care", assigned_to: "Richard", city: "Mankau City", primary_contact: "simon cleland", status: "Customer", follow_up: "19 July 2018", last_contact: "6 days ago"},
      {customer_name: "Tiwai Point", assigned_to: "Joe Russul", city: "Hamilton", primary_contact: "phil colis", status: "leads", follow_up: "18 July 2018", last_contact: "5 days ago"},
      {customer_name: "Silver Firm", assigned_to: "Joe Russul", city: "Hamilton", primary_contact: "simon cleland", status: "Meeting Held", follow_up: "16 July 2018", last_contact: "26 days ago"},
      {customer_name: "BestStart", assigned_to: "Mike Hoyle", city: "New York", primary_contact: "simon cleland", status: "leads", follow_up: "17 July 2018", last_contact: "46 days ago"},
     
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
closeSearchHandler=event=>{
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
  this.SearchDV=( <Search heading="Search Here" closeSearchHandler={this.closeSearchHandler} searchHandler={this.searchHandler} inputChangeHandler={this.inputChangeHandler}  />)
}
else{
  this.SearchDV="";
}


   return (
     <div>
     {this.SearchDV}
     
      <div className={this.agGridContainerClasses.join(' ')}>
      <div className={StyleCss.gridSec}>
   <div className="ag-theme-material agGridReport">
   <div className={StyleCss.SearchSec}>
     <h2>List Of Companies</h2>
     <Button variant="fab" mini  color="secondary" onClick={this.openSearchBox} aria-label="Edit">
        <SearchIcon/>
      </Button></div>
   <AgGridReact
   columnDefs={this.state.columnDefs}
   enableFilter={true}
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

