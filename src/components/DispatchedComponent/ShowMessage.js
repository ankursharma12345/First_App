import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Fragment, forwardRef } from "react";
import {useDispatch, useSelector}  from "react-redux";
import { setSnackbar } from "../../Store/Reducers/Snackbar";

const Alert = forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ShowMessage = () => {
  const { snackbarOpen, snackbarType, snackbarMessage, snackbarTime } =
    useSelector((state) => state.snackbar);

    const dispatch = useDispatch();
    const handleClose = ()=>{  
      dispatch(setSnackbar(false,snackbarType,snackbarMessage,snackbarTime))
    };

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={snackbarTime}
        onClose={handleClose}
        sx={{ whiteSpace: "pre-wrap" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarType}
          sx={
            snackbarType === "success"
              ? {
                  width: "100%",

                  //   backgroundColor: "#ebccd1 !important",
                  //  color: " #a94442 !important",

                  boxShadow: "none !important",
                  marginTop: "40px !important",
                }
              : snackbarType === "info"
              ? {
                  width: "100%",

                  backgroundColor: "#d1ecf1 !important",
                  color: "#0c5460 !important",

                  boxShadow: "none !important",
                  marginTop: "40px !important",
                }
              : {
                  width: "100%",

                  backgroundColor: "#ebccd1 !important",
                  color: " #a94442 !important",

                  boxShadow: "none !important",
                  marginTop: "40px !important",
                }
          }
        >
          {
            snackbarMessage
           }
        </Alert>
      </Snackbar>
    </Fragment>
  );
};
export default ShowMessage;
