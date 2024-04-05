import React from 'react'

function Pochta() {
  return (
    <div style={{display:'flex', alignItems:'center', width:'1370px',height:'300px', background:'#E5E4EDx', marginTop:'80px'}}>
        <div style={{width:'50%',height:'99%',background:'#E5E4ED'}} className="left">
          <img src="./img/Vector.png" alt="" />
        </div>
        <div style={{width:'50%',height:'99%',background:'#E5E4ED'}} className="right">
            <h2 style={{fontSize:'26px', fontWeight:'380',color:'black',marginTop:'20px'}}>Подпишитесь и будьте в курсе!</h2>
            <p style={{fontSize:'18px',color:'black',fontWeight:'350',marginTop:'20px'}}>Акции, скидки, распродажи ждут!</p>
            <div style={{position:'relative', width:'550px',height:'45px',borderRadius:'20px', marginTop:'50px'}} className="input-submit">
                <input style={{width:'527px',border:'none', height:'44px',paddingLeft:'20px',borderRadius:'20px',background:'white',color:'#7A7687'}} type="email" placeholder='Введите email'/>
                <button style={{position:'absolute', width:'150px',height:'46px',top:'0px',left:'68.6%',borderRadius:'20px',background:'#088269',color:'white',fontSize:'13.5px'}}>Подписаться</button>
            </div>
            <div style={{display:'flex',alignItems:'center', width:'400px', height:'40px',marginTop:'25px'}} className="checboks">
                <input style={{backgroundColor:'#D5D1E1',fontSize:'18px'}} type="checkbox" id="scales" name="scales"  />
                <label style={{fontSize:'13px',color:'#202020', marginLeft:'10px'}} for="scales"> Я даю согласие на обработку своих персональных данных.</label>
           </div>
            </div>
        </div>
  )
}

export default Pochta