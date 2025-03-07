"use client" 

import { useState} from 'react'
import { projects } from '../data/sample'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Checkbox, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { Add, Download } from '@mui/icons-material'
import NewProjectForm from './NewProjectForm';
import Project from './../model/ProjectInformation'
import * as dayjs from 'dayjs'

export default function ListOfProjects() {
    const [, setPage] = useState(0);
    const [newProject, setNewProject] = useState<Project>({
        name: '',
        description: '',
        deadline: Date.now()
    });

    // const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = () => {
        // setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
        setNewProject({
            name: '',
            description: '',
            deadline: Date.now()
        })
    };

    const handleClose = () => {
        setOpen(false);
        setNewProject({
            name: '',
            description: '',
            deadline: Date.now()
        })
    };
    
    const handleAdd = () => {
        if(newProject.name && newProject.description) {
            projects.push(newProject);
            setOpen(false);
        }
    };
    return (
        <>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Toolbar>
                {/* <Search>
                    <Search />
                    <TextField
                        placeholder="Search…"
                    />
                </Search> */}
                <Button variant="contained" startIcon={<Add />} onClick={handleClickOpen}>
                    Yeni Proje Ekle
                </Button>
            </Toolbar>
            <Divider />
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                // indeterminate={numSelected > 0 && numSelected < rowCount}
                                // checked={rowCount > 0 && numSelected === rowCount}
                                // onChange={onSelectAllClick}
                            />
                        </TableCell>
                        <TableCell
                            key={0}
                            align='left'
                            style={{ minWidth: 200 }}
                            >
                            <b>Proje Adı</b>
                        </TableCell>
                    {/* ))} */}
                    {/* {columns.map((column) => ( */}
                        <TableCell
                            key={1}
                            align='left'
                            style={{ minWidth: 400 }}
                            >
                            <b>Proje Açıklaması</b>
                        </TableCell>
                    {/* ))} */}
                    {/* {columns.map((column) => ( */}
                        <TableCell
                            key={2}
                            align='center'
                            style={{ minWidth: 100 }}
                            >
                            <b>Teslim Tarihi</b>
                        </TableCell>
                        <TableCell
                            key={3}
                            align='center'
                            style={{ minWidth: 100 }}
                            >
                            <b>Dökümanlar</b>
                        </TableCell>
                    {/* ))} */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((project, index) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                />
                            </TableCell>
                            <TableCell key={0} align='left'>
                                {project.name}
                            </TableCell>
                            <TableCell key={1} align='left'>
                                {project.description}
                            </TableCell>
                            <TableCell key={2} align='center'>
                                {dayjs.default(project.deadline).format('DD/MM/YYYY')}
                            </TableCell>
                            <TableCell key={3} align='center'>
                                <Tooltip title="Download">
                                    <IconButton href='api/projects/documentation/test' target='_blank'>
                                        <Download />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={100}
                rowsPerPage={10}
                page={0}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title" width={500}>
                Yeni Proje Oluşturma
            </DialogTitle>
            <DialogContent dividers>
                <NewProjectForm project={newProject} />
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose}>
                İptal
            </Button>
            <Button onClick={handleAdd} autoFocus>
                Ekle
            </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}