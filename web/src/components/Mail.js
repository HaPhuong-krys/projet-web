import React, {useState, useEffect} from 'react';
import '../styles/quiz/quiz.css';

function Mail(){
    
    const validerMail = () => {

    }
    return(
        <div className='mail'>
		    <div className='titre'> Veuillez saisir votre mail</div>
            <input type={'text'}/>
            <button onClick={() => validerMail()}>Valider</button>	
		</div>
    )
}
export default Mail;