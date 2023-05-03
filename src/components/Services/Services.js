import { Grid} from '@mui/material'
import Navbar from '../Navbar/Navbar'
import "./Services.css"
import Feature from './Feature'
import Step from './Step'
import Faqs from "../Faqs/Faqs"
import Footer from "../footer/Footer"
import Prising from './Prising'
function Services() {
  return (
    <>
    <Navbar/>
       <div>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justifyContent="center" style={{marginTop:"4rem"}}>
        <Grid item lg={5}>
        <p className="service_p">
              Pay Tax Any Where <br />
              <span className="service_text">Any Time. </span>
            </p>
            <p className="home-para">
              Our Services are free and will help you in all . . . . . .
            </p>
        </Grid>
        <Grid item lg={5}>
      <img className='service_img' src="./Assets/home.png" alt="" />
        </Grid>
       </Grid>
       <Feature />
       <Step />
       <Prising />
       <Faqs />
       <Footer />
      
      </div>
    </>
 
  )
}

export default Services
