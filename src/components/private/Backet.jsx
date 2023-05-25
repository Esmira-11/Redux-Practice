import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Backet() {

  let basketProducts = useSelector((state) => state);
  let dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [detail, setdetail] = useState('')
  const handleClose = () => setOpen(false);

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKETS", payload: id });
  };

  const saveProductToStorage = () => {
    localStorage.setItem("backet",JSON.stringify(basketProducts))

  }

  useEffect(() => {
    saveProductToStorage()
  }, [basketProducts])

  return (

    <>
    <div className="productPage">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {basketProducts.map((product) => (
            <Grid item xs={4}>
              <Card
                sx={{ height: "100%" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 20,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 300, objectFit: "contain", margin: "0 auto" }}
                  image={`${product.image}`}
                  title="clothes"
                />
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 25,
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ textAlign: "justify" }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingBottom: 20,
                  }}
                >
                  <Button
                    className="card-btn"
                    size="small"
                    style={{
                      fontSize: 16,
                      padding: 10,
                      color: "#8C01FA",
                      border: "1px solid #8C01FA",
                      borderRadius: 10,
                    }}
                    onClick={() => removeProduct(product.id)}
                    >
                    Remove from  basket
                  </Button>
                  <Button
                    className="card-btn"
                    size="small"
                    onClick={()=>{
                      setOpen(true);
                      setdetail(product)

                    }}
                    style={{
                      fontSize: 16,
                      padding: 10,
                      color: "#8C01FA",
                      border: "1px solid #8C01FA",
                      borderRadius: 10,
                    }}
                  >
                    Show Detail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Price: {detail.price}

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Rate: {detail.rating?.rate}
            <br />
            Count:{detail.rating?.count}
          </Typography>
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default Backet
