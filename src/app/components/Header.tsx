import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material"

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <Menu />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Proje ve Döküman Yönetimi
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}