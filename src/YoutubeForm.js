import React,{Component} from "react"
import {useFormik} from 'formik';



//function YoutubeForm(){
    
    // return (
    //     <>
        
    //     <form>
    //         <label htmlFor='name'>Name </label>
    //         <input type='text' id='name' name='name'/>
    //         <br/>
    //         <label htmlFor='email'>Email </label>
    //         <input type='text' id='email' name='email'/>
    //         <br/>
    //         <label htmlFor='chnanel'>Channel  </label>
    //         <input type='text' id='channel' name='channel'/>
    //         <br/>
    //         <button onClick={}>Submit</button>
    //         </form>

        
    //     </>

    // )

    class YoutubeForm extends Component {
    

        async postData() {
            try{
                let result=await fetch ('https://webhook.site/5a412ee5-7b6f-4a62-874f-348838223960',{
                    method:'post',
                    mode:'no-cors',
                    headers:{
                        'Accept':'application/json',
                        'Content-type':'application/json',},
                    body: JSON.stringify({
                        key1: 'myusername'})
        })

        console.log('Result:'+result)

            }

            catch(e){
                console.log(e)
            }


                    }
    
        render() {
             return (
                  <form>
                         <label htmlFor='name'>Name </label>
                         <input type='text' id='name' name='name'/>
                         <br/>
                         <label htmlFor='email'>Email </label>
                         <input type='text' id='email' name='email'/>
                         <br/>
                         <label htmlFor='chnanel'>Channel  </label>
                         <input type='text' id='channel' name='channel'/>
                         <br/>
                         <button onClick={()=>this.postData()} >Submit</button>
                    </form>
    
                
            )
        }
    }




export default YoutubeForm