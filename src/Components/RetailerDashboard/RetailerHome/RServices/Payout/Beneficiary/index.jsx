import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow  } from '@mui/material';
import React,  { useState } from 'react'

const BeneficiaryList = ({ handleChange,columns = [], rows = [] }) => {
    const [page, setPage] = useState (0);
      const [rowsPerPage, setRowsPerPage] = useState(10);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
  return (
    <div className="BeneficiaryTableOuterMost text-sm md:text-md bg-white">
      <div className="BeneficiaryTableOuter mt-3">
        <div className="tableFields">
         <TableContainer>
          <Table  sx={{ minWidth: 700 }}aria-label="customized table">
            <TableHead>
              <TableRow>
                {columns.map((item)=>[
                  <TableCell key={item.id}>
                    {item.name}
                  </TableCell>
                ])}
              </TableRow>
            </TableHead>
            <TableBody>
            {(rows || [])
            .slice (page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                console.log(row)
                return (
                  <TableRow  key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                          
                        </TableCell>
                      );
                    })}
                    </TableRow>
                      );
                    })}
            </TableBody>
          </Table>
         </TableContainer>
         <TablePagination
        rowsPerPageOptions={[10, 20, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} />
        </div>
        </div>
      </div>
  )
}

export default BeneficiaryList