import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'raceTime', label: 'Race Time', minWidth: 170, align: 'center' },
  { id: 'horse', label: 'Horse', minWidth: 170, align: 'center', },
  {
    id: 'jockyRating', label: 'Jocky Rating', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US'), },
  {
    id: 'trainerRating', label: 'Trainer Rating', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US'), },
];

function createData(raceTime, horse, jockyRating, trainerRating) {
  return { raceTime, horse, jockyRating, trainerRating };
}

const rows = [
  createData('12.25', 'Champagnesuperover', 120.98, 39.02),
  createData('12.25', 'Ugo Du Misselot', 102.22, 19.46),
  createData('12.25', 'Bass Rock', 41.12, 27.29),
  createData('12.25', 'Melanamix', 117.63, 57.75),
  createData('14.30', 'Darius Des Sources', 69.95, 11.52),
  createData('14.30', 'Manetti', 117.63, 15.91),
  createData('14.30', 'Vocaliser', 110.7, 39.02),
  createData('15.00', 'Hot Gossip', 111.23, 81.86),
  createData('15.00', 'Sinndarella', 120.53, 31.21),
  createData('15.00', 'Charm Offensive', 117.63, 15.91),
  createData('15.00', 'Timeless Beauty', 120.98, 13.81),
  createData('15.35', 'Shaughnessy', 120.53, 123.11),
  createData('15.35', 'Made For You', 110.7, 39.02),
  createData('15.35', 'Cairnshill', 86.29, 11.27),
  createData('16.05', 'Everyday Champagne', 117.63, 18.38),
  createData('16.05', 'Aviewtosea', 106.14, 18.39),
  createData('16.05', 'K C Bailey', 93.16, 10.26),
  createData('16.05', 'Fortescue Wood', 12.66, 15.91),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: '#1a5f46', color: 'white' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.horse}>
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}