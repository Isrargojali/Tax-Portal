import React from 'react'
import "./Services.css"
import { Grid } from '@mui/material'
function Prising() {
  const prising = [
    {
      priceHeading: "PERSONAL",
      priceTotal: "$17.99",
      priceMonth: "MONTHLY",
      pricePara: "Suited for Personal",
      priceForm: "1040 form",
      priceParaOne: "editable",
      priceDownlod: "unlimited downloads",
      priceBasic: "Basic Assistanc",
      priceButton: "BUY NOW",
      className:"blue"
    },
    {
      priceHeading: "BUSINESS",
      priceTotal: "$37.99",
      priceMonth: "MONTHLY",
      pricePara: "Suited for Personal",
      priceForm: "1040 form",
      priceParaOne: "editable",
      priceDownlod: "unlimited downloads",
      priceBasic: "Basic Assistanc",
      priceButton: "BUY NOW",
      className:"red"
    },
    {
      priceHeading: "ENTERPRISE",
      priceTotal: "$57.99",
      priceMonth: "MONTHLY",
      pricePara: "Suited for Personal",
      priceForm: "1040 form",
      priceParaOne: "editable",
      priceDownlod: "unlimited downloads",
      priceBasic: "Basic Assistanc",
      priceButton: "BUY NOW",
      className:"white"
    },
  ]
  return (
    <div className='prising_cont'>
      <Grid container justifyContent="space-evenly" 
      gap={4}
      >
          {prising.map((e) => {
            return (
              <Grid item sm={10} md={5} lg={3}>
                <div className="price_card">
                <p className='price_heading'>{e.priceHeading}</p>
                <h3 className="price_total">{e.priceTotal}</h3>
                <p className="price_month">{e.priceMonth}</p>
                <p className="price_para">{e.pricePara}</p>
                <p className="price_form">{e.priceForm}</p>
                <p className="price_para_one">{e.priceParaOne}</p>
                <p className="price_downlod">{e.priceDownlod}</p>
                <p className="price_basic">{e.priceBasic}</p>
                <div className='pric_btn'>
                <button className={e.className}>{e.priceButton}</button>
                </div>
                </div>
           

              </Grid>
            );
          })}
        </Grid>

    </div>
  )
}

export default Prising