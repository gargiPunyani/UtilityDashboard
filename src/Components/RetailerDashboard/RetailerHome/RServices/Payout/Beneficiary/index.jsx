import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel  } from '@mui/material';
import React,  { useState } from 'react'

const BeneficiaryList = ({ handleChange,columns = [], rows = [] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const sortedRows = [...rows].sort((a, b) => {
    if (!orderBy) return 0; // No sorting by default
    if (order === "asc") return a[orderBy] > b[orderBy] ? 1 : -1;
    return a[orderBy] < b[orderBy] ? 1 : -1;
  });
  return (
    <div className="BeneficiaryTableOuterMost text-sm md:text-md bg-white">
      <div className="BeneficiaryTableOuter mt-3">
        <div className="tableFields">
         <TableContainer  component={Paper }>
          <Table  sx={{ minWidth: 700 }}aria-label="customized table">
          <TableHead>
                <TableRow>
                  {columns.map((item) => [
                    <TableCell
                      key={item.id}
                      className={` font-extrabold bg-gray-200 border border-gray-300 p-2 ${
                        item.align === "right"
                          ? "text-right"
                          : item.align === "center"
                          ? "text-center"
                          : "text-left"
                      }`}
                    >     <TableSortLabel
                    active={orderBy === item.id}
                    direction={orderBy === item.id ? order : "asc"}
                    onClick={() => handleSort(item.id)}
                  >
                    {item.name}
                  </TableSortLabel>
                    </TableCell>,
                  ])}
                </TableRow>
              </TableHead>
              <TableBody>
              {sortedRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className={`border border-gray-300 p-2 overflow-hidden whitespace-normal break-words ${
                              column.align === "right"
                                ? "text-right"
                                : column.align === "center"
                                ? "text-center"
                                : "text-left"
                            }`}
                            // style={{ width: `${150 / columns.length}%` }} // Equal width for all columns
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
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