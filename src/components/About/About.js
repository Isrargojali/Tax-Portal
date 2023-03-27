import React from 'react'
import "./About.css"
function About() {
  return (
    <div className='about-container'>
      <div className="about-heading">
        <p className='about-text'>We have <span className='about-span'>Amazing Service</span></p>
        <p className='about-para'>TaxSlayer is a reliable and affordable option for those who want to prepare and file their <br /> taxes online. However, it is important to note that everyone's tax situation is different, so<br /> it's always a good idea to consult with a tax professional before filing your taxes.</p>
      </div>
      <div className='about-second-div'>
        <div className='about-context'> 
            <p className='about-p'>Our<span className='span-p'>Aim</span></p>
            <p className='about-content'>
            The main aims of a taxpayer portal can include:<br/>
1. Facilitating tax compliance: Taxpayer portals provide a convenient and secure way for taxpayers to file their tax returns, pay taxes, and manage their tax accounts.<br/>
2. Improving taxpayer experience: Taxpayer portals can offer a user-friendly interface that simplifies the tax filing process and makes it easier for taxpayers to understand their tax obligations.<br/>
3. Enhancing transparency: Taxpayer portals can provide taxpayers with access to information about their tax liabilities and payments, as well as other relevant tax-related information.<br/>
4. Reducing administrative costs: By enabling online tax filing and payment, taxpayer portals can help reduce administrative costs for both taxpayers and tax authorities.<br/>
5. Enhancing efficiency: Taxpayer portals can streamline tax-related processes and enable tax authorities to process tax returns and payments more efficiently.    
            </p>
        </div>
        <div>
            <img className='about_img' src="./Assets/about.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
