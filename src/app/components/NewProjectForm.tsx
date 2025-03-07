"use client"

import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import * as dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, FormControl, FormGroup, TextField } from "@mui/material";

export default function NewProjectForm({ project } : any) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [deadline] = useState<dayjs.Dayjs | null>(null);

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormGroup>
                    <TextField required label="Proje Adı" value={name} onChange={event => {
                        setName(event.target.value)
                        project.name = event.target.value
                    }} />
                    <br />
                    <TextField required label="Proje Açıklaması" value={description} multiline={true} onChange={event => {
                        setDescription(event.target.value)
                        project.description = event.target.value
                    }} />
                    <br />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker value={deadline} onChange={(newValue) => project.deadline = newValue && newValue.valueOf() || Date.now()} label="Teslim Tarihi"/>
                        </DemoContainer>
                    </LocalizationProvider>
                </FormGroup>
            </FormControl>
        </Box>
    )
}