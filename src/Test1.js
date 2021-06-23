import React from 'react'

class Test1 extends React.Component{
    
    constructor(props){
        console.clear();
        console.log('constructor');
        console.log(props);
        super();
        this.state = {
            s1 : 0
        }
    }
    
    
    Buttonhandler = () => {
        let val = this.state.s1;
        val++
        this.setState({s1 : val})
    }

    // static getDerivedStatefromprops(props, state){}


    render (){
        console.log('render1')
        return(
            <>
            {console.log('render2')}
            <div>
                <button id='Button' onClick = {this.Buttonhandler}>push</button>
            </div>
            <div>
                {this.state.s1}

            </div>
            </>
        )
    }
}

export default Test1  //sheidzleba ganscvavdebodes klasis saxelidan;