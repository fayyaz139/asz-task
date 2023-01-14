import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import { useState,useMemo,useRef,useCallback } from 'react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
import { Delete,Edit } from '@mui/icons-material';
import '../../App.css'
  

const DataGrid = () => {
	const gridRef = useRef();
	const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
	const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
	const [rowData, setRowData] = useState();
	const statusFormatter = (params) => {
		return params.data.state?<div style={{width:10,height:10,borderRadius:'50%',backgroundColor:'#189FA4'}}></div>:<div style={{width:10,height:10,borderRadius:'50%',backgroundColor:'black'}}></div>;
	  };
	  const actionFormatter = (params) => {
		return <Grid container >
			 <Edit sx={{ fontSize: 16 }}/>
          <Delete sx={{ fontSize: 16 }}/>
		</Grid>
	  };
	const [columnDefs, setColumnDefs] = useState([
	  { field:'id',headerName: 'ID', minWidth: 150 },
	  {field:'user', headerName: 'USER', maxWidth: 90 },
	  { field:'role',headerName: 'ROLE', minWidth: 150 },
	  { field:'email',headerName: 'E-MAIL', maxWidth: 90 },
	  {field:'phone', headerName: 'PHONE', minWidth: 150 },
	  {field:'dob', headerName: 'DATE OF BIRTH', minWidth: 150 },
	  { field:'state',headerName: 'STATUS' ,cellRenderer:statusFormatter},
	  {field:'action', headerName: 'ACTION', cellRenderer:actionFormatter},
	 
	]);
	const defaultColDef = useMemo(() => {
	  return {
		flex: 1,
		minWidth: 100,
	  };
	}, []);
  
	const onGridReady = useCallback((params) => {
	  setRowData([
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},
		{id:1,user:"Fayyaz",role:"Admin",email:"example@email.com",phone:'9999999999',dob:"23/7/22",state:true},

	  ])
	}, []);
  
  
	return (
		<Card className='Card'>
			<CardContent>
			<Grid container>
			<Typography variant="h5" component="div" color={'#189FA4'} >
              Users
            </Typography>
			<Box sx={{display:{ xs: 'none', md: 'flex' }}}>
			<Button variant="contained" style={{background: '#F79C30',boxShadow:'none',marginRight:'25px',marginLeft:'56px'}} >Create User </Button>
            <Button variant="outlined"  style={{border: '1px solid #F79C30',boxShadow:'none',color:'#F79C30'}}>Import Users </Button>
			
			</Box>
			</Grid>
			<Box sx={{display:{ xs: 'flex', md: 'none' }}}>
			<Button variant="contained" style={{background: '#F79C30',boxShadow:'none',marginBottom:16,marginTop:16}} >Create User </Button>
			
			</Box>
			<Box sx={{display:{ xs: 'flex', md: 'none' }}}>
            <Button variant="outlined"  style={{border: '1px solid #F79C30',boxShadow:'none',color:'#F79C30'}}>Import Users </Button>
			
			</Box>
			<Box sx={{ height:500, width: '100%',paddingTop:'46px' }}>

			<div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
			pagination={true}
			paginationPageSize={10}
          ></AgGridReact>
        </div>
		   </Box>

		 
		  
		   
	
		 
			</CardContent>
             
		</Card>
	);
};

export default DataGrid;