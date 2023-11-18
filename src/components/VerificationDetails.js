import React, { useState } from 'react';



const VerificationDetails = () => {

    const [isVisible, setIsVisible] = useState(true);
 
   

  const listStyle = {
    listStyleType: 'disc',
    marginInlineStart: '20px',
    fontSize:'9px'
  };

  const bannerStyle = {
    display: isVisible ? 'block' : 'none',
    backgroundColor: '#007bff', // Red background
    color: '#FFFFFF', // White text
    padding: '25px',
    borderRadius: '8px', // Border radius
    marginBottom: '20px',
    position: 'relative',
    marginTop:'20px'
  };

  const closeButtonStyle = {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    position: 'absolute',
    top: '1%',
    right: '1%',
    fontSize:12,
    cursor: 'pointer',
  };

  const iconStyle = {
    marginRight: '5px',
    width:15
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return(
<div style={{display: isVisible?'block':'none' }} class="banner">
  <p class="notice">
    <i class="lni lni-bullhorn" style={{marginRight:10}}></i>
    Notice!
  </p>

  <p class="verification-text">
    We prioritize authenticity, <span style={{fontWeight:'bold'}}>verifying each profile before activation.</span> Our free verification process includes checks for:
  </p>

  <ul class="banner-list">
    <li><i class="fas fa-check-circle"></i> Religion <span>Exclusively for Muslims (Coming soon: Apps for Buddhist, Christian, and Hindu communities!)</span></li>
    <li><i class="fas fa-check-circle"></i> NIC</li>
    <li><i class="fas fa-check-circle"></i> Name</li>
    <li><i class="fas fa-check-circle"></i> Date of Birth</li>
    <li><i class="fas fa-check-circle"></i> Mobile</li>
    <li><i class="fas fa-check-circle"></i> WhatsApp Number</li>
  </ul>

  <p class="note-text">
    To ensure a genuine experience, we kindly request users to refrain from using fake details.
  </p>

  <p class="note-text">
    Please note that entering a fake email may result in non-receipt of your profile login details.
  </p>

  <button onClick={()=>handleClose()} class="close-button" onclick="handleClose()">
    <i class="fas fa-times"></i> Close
  </button>
</div>



  )

   
  // return (
  //   <div style={bannerStyle}>
  //     <p style={{ fontSize:'12px', marginLeft:'20px'}}>
  //       <i className="lni lni-bullhorn" style={iconStyle}></i> 
  //       Notice! 
  //       <p style={{ marginTop:10,fontSize:'11px', marginLeft:'20px'}}>We prioritize authenticity, verifying each profile before activation.Our free verification process includes checks for:
  //     </p>
  //       </p>
      
      
  //     <ul className='banner-list' style={{ marginTop:10 ,marginLeft:'10px', listStyleType: 'bullet', paddingLeft: '50px', marginBottom: '10px', fontSize:'10px' }}>
  //       <li>
  //         <i className="fas fa-check-circle" style={iconStyle}></i> Religion <span>Exclusively for Muslims (Coming soon: Apps for Buddhist, Christian, and Hindu communities!)</span>
  //       </li>
  //       <li>
  //         <i className="fas fa-check-circle" style={iconStyle}></i> NIC
  //       </li>
  //       <li>
  //         <i className="fas fa-check-circle" style={iconStyle}></i> Name
  //       </li>
  //       <li>
  //         <i className="fas fa-check-circle" style={iconStyle}></i> Date of Birth
  //       </li>
  //       <li>
  //         <i className="fas fa-check-circle" style={iconStyle}></i> Mobile
  //       </li>
  //       <li>
  //         <i className="fas fa-check-circle" style={iconStyle}></i> WhatsApp Number
  //       </li>
  //     </ul>
  //     <p style={{ fontSize:'10px', marginLeft:'20px'}}>
  //       <i className="fas fa-check-circle" style={iconStyle}></i> To ensure a genuine experience, we kindly request users to refrain from
  //       using fake details.
  //     </p>
  //     <p style={{ fontSize:'10px', marginLeft:'20px'}}>
  //       <i className="fas fa-check-circle" style={iconStyle}></i> Please note that entering a fake email may result in non-receipt of your
  //       profile login details.
  //     </p>
  //     <button style={closeButtonStyle} onClick={handleClose}>
  //       <i className="fas fa-times"></i> Close
  //     </button>
  //   </div>
  // );
//   return (
//     <div style={bannerStyle}>
     
    // <ul style={listStyle}>
    //   <li>We prioritize authenticity, verifying each profile before activation.</li>
    //   <li>Our free verification process includes checks for:</li>
    //   <ul style={listStyle}>
    //     <li>Religion</li>
    //     <li>NIC</li>
    //     <li>Name</li>
    //     <li>Date of Birth</li>
    //     <li>Mobile</li>
    //     <li>WhatsApp Number</li>
    //   </ul>
    //   <li>To ensure a genuine experience, we kindly request users to refrain from using fake details.</li>
    //   <li>Please note that entering a fake email may result in non-receipt of your profile login details.</li>
    // </ul>
//     <button style={closeButtonStyle} onClick={handleClose}>
//       Close
//     </button>
//   </div>
  
//   );
};

export default VerificationDetails;
