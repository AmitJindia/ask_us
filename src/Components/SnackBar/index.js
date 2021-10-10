import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function SnackBar(props) {
    const { severity, message, show, setShow } = props;
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    return (
        <div>
            {show ?
                <Snackbar open={show} autoHideDuration={10000} onClose={() => setShow(false)}>
                    <Alert onClose={() => setShow(false)} severity={severity}>
                        {message}
                    </Alert>
                </Snackbar>
                :
                ""}
        </div>
    );
}

export default SnackBar;