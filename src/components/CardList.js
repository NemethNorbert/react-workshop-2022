import Card from "./Card";
import { Grid } from "@mui/material";

export default function CardList ({cards, removeCard}) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
        >
            {cards.map(card => <Grid item key={card.id}><Card key={card.id} removeCard={removeCard} card={card} /></Grid>)}
        </Grid>
    )
}