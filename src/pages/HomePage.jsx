import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { ProfileCard } from "../components/layout/ProfileCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import { CreateEditCardForm } from "../components/layout/CreateEditCardForm";
import { useRecoilState } from "recoil";
import { cardArray } from "../state/state";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  card: {
    padding: 10,
    marginRight: 20,
  },
  cardGrid: {
    flexWrap: "wrap",
    marginTop: 40,
    display: "flex",
    justifyContent: "start",
  },
  button: {
    display: "flex",
    width: "30%",
    margin: "auto",
    marginTop: 40,
    marginBottom: 40,
  },
});

export const HomePage = () => {
  const classes = useStyles();
  const [cardArr, setCardArr] = useRecoilState(cardArray);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setClickedId("");
  };

  const deleteCard = (clickedCard) => {
    const filteredArray = cardArr.filter((card) => card.id !== clickedCard.id);
    setCardArr(filteredArray);
    setSnackbarOpen(true);
  };

  const editCard = (card) => {
    setOpen(true);
    setClickedId(card.id);
  };
  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="error">
          Card deleted successfully!
        </Alert>
      </Snackbar>
      <CreateEditCardForm
        open={open}
        handleClose={handleClose}
        clickedId={clickedId}
      />
      <Navbar />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Add new Card
      </Button>
      <Container fixed>
        <div className={classes.cardGrid}>
          {cardArr.map((el) => (
            <div key={el.id} className={classes.card}>
              <ProfileCard
                name={el.name}
                description={el.description}
                imageURL={el.imageURL}
                deleteClicked={() => deleteCard(el)}
                editClicked={() => editCard(el)}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
