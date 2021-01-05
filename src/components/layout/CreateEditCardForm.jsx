import React, { forwardRef, useEffect, useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { useRecoilState } from "recoil";
import { cardArray } from "../../state/state";
import * as yup from "yup";

let cardValidationScheme = yup.object({
  name: yup
    .string()
    .required("* Name is required")
    .min(2, "* Name must include at least 2 letters"),
});

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CreateEditCardForm = ({ open, handleClose, clickedId }) => {
  const [cardArr, setCardArr] = useRecoilState(cardArray);
  const [clickedCardInfo, setClickedCardInfo] = useState([]);

  useEffect(() => {
    const clickedCard = cardArr.filter((el) => el.id === clickedId);
    setClickedCardInfo(clickedCard);
  }, [clickedId]);

  const initialValues = {
    name: clickedId === "" ? "" : clickedCardInfo[0]?.name,
    description: clickedId === "" ? "" : clickedCardInfo[0]?.description,
    imageURL: clickedId === "" ? "" : clickedCardInfo[0]?.imageURL,
    id: clickedId === "" ? uuidv4() : clickedId,
  };
  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Hello</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the information down bellow!
        </DialogContentText>

        <Formik
          validationSchema={cardValidationScheme}
          initialValues={initialValues}
          onSubmit={(values) => {
            if (clickedId === "") {
              console.log("ahmed");
              setCardArr([...cardArr, values]);
              handleClose();
            } else {
              const newCardInfo = cardArr.map((card) => {
                if (clickedId === card.id) {
                  return values;
                }
                return card;
              });
              setCardArr(newCardInfo);
              handleClose();
            }
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            getFieldProps,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.name && errors.name}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <TextField
                autoFocus
                margin="dense"
                id="imageURL"
                label="Image URL (Link)"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.imageURL}
              />
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};
