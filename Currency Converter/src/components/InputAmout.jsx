import { Grid, InputAdornment, TextField } from "@mui/material"
import { useContext } from "react"
import { CurrencyContext } from "../context/CurrencyContext"

const InputAmout = () => {
  const { firstAmount, setFirstAmount} = useContext(CurrencyContext);

  return (
    <Grid item xs={12} md>
      <TextField
        value={firstAmount}
        onChange={e => setFirstAmount(e.target.value)}
        label="Amount"
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">💰</InputAdornment>
        }}
      />
    </Grid>
  )
}

export default InputAmout