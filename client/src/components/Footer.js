import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@mui/material";


const Footer = () => <>
        <AppBar position="static" elevation={0} component="footer" style={{ background: '#2E3B55' }}>
            <Toolbar style={{ justifyContent: "center" }}>
                
                
                <Typography style={{justifyContent:"center"}}><br/>Made with Love By <Link href="https://www.instagram.com/b_h_a_s_k_o_r_/" target="_blank">Bhaskar Das</Link></Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;