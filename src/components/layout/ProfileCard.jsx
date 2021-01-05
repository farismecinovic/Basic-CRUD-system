import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const ProfileCard = (props) => {
  const classes = useStyles();

  return (
    <Card identifier={uuidv4()} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imageURL}
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.editClicked}>
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={props.deleteClicked}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
