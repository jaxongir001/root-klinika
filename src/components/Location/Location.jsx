import React from 'react'

function Location() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'1370px',height:'600px',background:'#fff',marginBottom:'20px', marginTop:'40px'}}>
        <div className="left" style={{display:'flex', justifyContent:'center', alignItems:'center', width:'49%', height:'96%', border:'2px solid #E5E2EE',borderRadius:'20px'}}>
        <iframe style={{width:'99%',height:'99%',borderRadius:'20px',border:'none'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7026.508712481576!2d69.20711002333051!3d41.2805900429043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a30998c68ed%3A0xb450fcc02434798b!2z0KLQtdCw0YLRgCDQvtC_0LXRgNC10YLRgtGL!5e0!3m2!1sru!2s!4v1712184199309!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="right" style={{width:'49%', height:'96%', border:'2px solid #E5E2EE', marginLeft:'15px',background:'white',borderRadius:'20px'}}>
            <h2 style={{fontSize:'26px', fontWeight:'400', color:'black', marginLeft:'30px'}}>Остались вопросы?</h2>
            <div style={{width:'400px', marginLeft:'30px'}} className="text-p">
            <p style={{fontSize:'16px', color:'#7A7687'}}>Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
            </div>
            <div style={{display:'inline-block', width:'90%', height:'330px', marginLeft:'30px'}} className="input">
                <div style={{display:'flex', alignItems:'center',marginTop:'5px',  border:'1px solid #7A7687', borderLeft:'none',borderRight:'none',borderTop:'none', width:'90%', height:'50px'}} className="input1"><input style={{width:'99%',height:'40px', border:'none', background:'white', outline:'none'}} type="text" placeholder='Ваше имя'/></div>
                <div style={{display:'flex', alignItems:'center',marginTop:'5px', border:'1px solid #7A7687', borderLeft:'none',borderRight:'none',borderTop:'none', width:'90%', height:'50px'}} className="input1"><input style={{width:'99%',height:'40px', border:'none',background:'white', outline:'none'}} type="text" placeholder='Ваш телефон'/></div>
                <div style={{display:'flex', alignItems:'center',marginTop:'5px', border:'1px solid #7A7687', borderLeft:'none',borderRight:'none',borderTop:'none', width:'90%', height:'50px'}} className="input1"><input style={{width:'99%',height:'40px', border:'none',background:'white', outline:'none'}} type="text" placeholder='Ваш email'/></div>
                <div style={{display:'flex', alignItems:'start',marginTop:'5px', border:'1px solid #7A7687', borderLeft:'none',borderRight:'none',borderTop:'none', width:'90%', height:'100px'}} className="input1"><input style={{width:'99%',height:'40px', border:'none',background:'white', outline:'none'}} type="text" placeholder='Ваш email'/></div>
            </div>
            <div style={{display:'flex', alignItems:'center', width:'99%', height:'px'}} className="button">
                <button style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'14px', background:'#088269', width:'160px',height:'50px', marginLeft:'30px',borderRadius:'30px',color:'white'}}>Отправить</button>
                <div style={{display:'flex', alignItems:'center', width:'400px', height:"50px",marginLeft:'30px'}} className="text">
                    <p style={{fontSize:'13px', color:'#7A7687'}}>Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях Политики конфиденциальности.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location