import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React, { useState } from "react";

const ExecutiveTable = ({ handleChange,columns = [], rows = [] }) => {
  const [page, setPage] = useState (0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setRowsPerPage(+event.target.value)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="fieldTableOuterMost text-sm md:text-md bg-white">
      <div className="fieldTableOuter mt-3">
        <div className="searchAndListItem">
          <div className="searchData text-xs mt-2 sm:px-4 mb-5 sm:text-sm">
            Search:
            <input placeholder="Search" className="searchInput ml-3 border-2 mt-1 p-1 cursor-pointer outline-none px-2 border-gray-400 rounded-lg" onChange={handleChange} />
          </div>
        </div>
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
                  <TableRow key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
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
    
  );
};

export default ExecutiveTable;
