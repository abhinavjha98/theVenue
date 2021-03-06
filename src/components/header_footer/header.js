import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import MenuIcon from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

class header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style = {{
                    backgroundColor:'#2f2f2f',
                    boxShadow : 'none',
                    padding : '10px 0px'
                }}
            >
            <ToolBar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">
                        The Venue
                    </div>
                    <div className="header_logo_title">
                        Musical Events
                    </div>
                </div>
            </ToolBar>
            </AppBar>
        );
    }
}

export default header;