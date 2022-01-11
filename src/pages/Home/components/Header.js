import React from "react";
import { Button } from '@material-ui/core';
// import '../style.css';

function Header() {
    return (
        <header className='header'>
        <div className='toolbar'>
            <div>
                <a href="/">Conecta Dev - Alteração</a>
            </div>
            <div>
                <Button color='primary' variant='contained'>
                    Novo Post
                </Button>
                <span>Img1</span>
                <span>Img2</span>
            </div>
        </div>
        </header>
    );
}

export default Header;