import React,{Component} from 'react';
import './services.css';

class Services extends Component{
    render(){
        return(
            <div className="services">
                <h3>Serviços:</h3>
                <h2></h2>
                <div className="row">
                    <div>
                        <span>
                            <ion-icon name="phone-portrait"></ion-icon>
                        </span>
                        <h4>Mobile</h4>
                        <p></p>
    
                    </div>
                    <div>
                        <span>
                            <ion-icon name="brush"></ion-icon>
                        </span>
                        <h4>Edição</h4>
                        <p></p>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="thumbs-up"></ion-icon>
                        </span>
                        <h4>Confiança</h4>
                        <p></p>
                    </div>
                    <div>
                        <span>
                        <ion-icon name="help"></ion-icon>
                        </span>
                        <h4>Criação</h4>
                        <p></p>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
const iconObj = [
    {
        icon:'',
    },
    {
        icon:'',
    },
    {
        icon:'',
    },
    {
        icon:'',
    }
];

/*class Icons extends Component{
    render(){
        return(

        );
    }
}*/

export default Services;
