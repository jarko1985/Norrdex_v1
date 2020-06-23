import React, { Component } from 'react';
import Title from '../components/Title';
import axios from 'axios';


class Flights extends Component {

state={
name:'',
email:'',
airline:'',
class:'Economy class',
adult:0,
child:0,
infant:0,
message:'',
sent:false    
}

//handle Inputs 
handleName = (event)=>{
this.setState({
name:event.target.value    
});
}

handleEmail = (event)=>{
this.setState({
email:event.target.value    
});
}

handleMessage = (event)=>{
this.setState({
message:event.target.value    
});    
}

handleAirline = (event)=>{
this.setState({
airline:event.target.value    
});   
}

handleClass=(event)=>{
this.setState({
class:event.target.value    
})    
}

handleAdult = (event)=>{
this.setState({
adult:event.target.value    
})      
}

handleChild = (event)=>{
this.setState({
child:event.target.value    
})      
}

handleInfant = (event)=>{
this.setState({
infant:event.target.value    
})      
}
//end of handle Inputs

//handle Submit

handleSubmit = (event)=>{
event.preventDefault();    
let data={
name:this.state.name,
email:this.state.email,
airline:this.state.airline,
class:this.state.class,
adult:this.state.adult,
child:this.state.child,
infant:this.state.infant,
message:this.state.message,

}

axios.post('/api/form',data)
.then(res=>{
this.setState({
sent:true    
},this.resetForm());
}).catch(()=>{
console.log('Message not sent');    
});
}

resetForm = ()=>{
this.setState({
name:'',
email:'',
airline:'',
message:'',
class:'Economy',
adult:0,
child:0,
infant:0    
})
setTimeout(()=>{
    this.setState({
     sent:false   
    })
},3000)    
}


render(){    
    return (
       <React.Fragment>
           <Title title='Book a flight form'/>
           <div className='form-container'>
           <form onSubmit={this.handleSubmit}>
               {/*Single Input*/}
               <div className='singleInput'>
                   <label htmlFor='name'>name</label>
                   <input type='text'
                          name='name' 
                          className='name' 
                          placeholder='enter your name...'
                          value={this.state.name}
                          onChange={this.handleName}
                          /> 
               </div>
               {/*Single Input*/}
               {/*Single Input*/}
               <div className='singleInput'>
                   <label htmlFor='email'>email</label>
                   <input type='email'
                          name='email' 
                          className='email' 
                          placeholder='enter your email...'
                          value={this.state.email}
                          onChange={this.handleEmail}
                          /> 
               </div>
               {/*Single Input*/}
               {/*Single Input*/}
               <div className='singleInput'>
                   <label htmlFor='airline'>Prefered Airlines</label>
                   <input type='text'
                          name='airline'
                          className='airline'
                          placeholder='your Preffered airlines...'
                          value={this.state.airline}
                          onChange={this.handleAirline}
                          /> 
               </div>
               {/*Single Input*/}
               <div className='singleInput' style={{display:'flex'}}>
                    <label htmlFor='class'>Class of Travel</label>
                    <select name='class' value={this.state.class} onChange={this.handleClass}>
                        <option>Economy class</option>
                        <option>Buisness class</option>
                        <option>First class</option>
                    </select>
               </div>
               {/*Single Input*/}
                {/*Single Input*/}
                <div className='singleInput' style={{display:'flex'}}>    
                    <label htmlFor='adult'>Adult</label>
                    <select name='adult' value={this.state.adult} onChange={this.handleAdult}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <label htmlFor='child'>child</label>
                    <select name='child' value={this.state.child} onChange={this.handleChild}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <label htmlFor='infant'>infant</label>
                    <select name='infant' value={this.state.infant} onChange={this.handleInfant}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
               {/*Single Input*/}
               {/*Single Input*/}
               <div className='singleInput textArea'>
                    <label htmlFor='message'></label>
                   <textarea name='message' 
                             placeholder='your message...'
                             rows='10' 
                             cols='100'
                             value={this.state.message}
                             onChange={this.handleMessage}
                             >
                   </textarea> 
               </div>
               {/*Single Input*/}
               <div className={this.state.sent?'sent sentAppear':'sent'}>your message has been sent...</div>
               <div className='btn1'>
               <button type='submit'>Submit</button>
               </div>  
           </form> 
           </div>










       </React.Fragment>
    )
}
}

export default Flights;
