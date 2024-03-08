import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const ConfirmNotification = ({ isOpen, onClose,cancelButtonDialog,confirmButtonDialog,handleSubmit }) => {
 
  const StyledPaper = styled(Paper)`
    background-color: white;
  `;
  const handleCancel=()=>{
    onClose();
  }
  return (
    <Dialog
    onClose={onClose}
    open={isOpen}
    disableEscapeKeyDown={true}
    PaperComponent={StyledPaper}
    >
      <DialogTitle>
        {" "}
        <Typography variant="h4">Delete</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Are you sure you want to delete this user?
        </Typography>
        <Typography variant="subtitle2">
          You can't undo this operation
        </Typography>
      </DialogContent>
      <DialogActions>

        <Button variant="contained" onClick={handleCancel} className={cancelButtonDialog}>Cancel</Button>
        <Link to="/dashboard">
        <Button variant="contained" className={confirmButtonDialog} onClick={handleSubmit}>
          Confirm
        </Button>
        </Link>
       
      </DialogActions>
    </Dialog>
  );
};
 
export default ConfirmNotification;
