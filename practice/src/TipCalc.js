import React from 'react' 


class Tipcalc extends React.Component {
    constructor(props){
        super(props)
        this.state={
            ourData:[],
            tempdata:'',
            amount:'',
            servic: '',
            refe:[]


          }
    }

    handleClick=()=>{
      this.setState({ourData:[...this.state.ourData,`${this.state.tempdata} Offered ${this.state.amount*this.state.servic}`],tempdata:'',refe:[...this.state.refe,this.state.amount*this.state.servic]})
    }

 

    render(){
        return(
            <div style={{textAlign:'center',backgroundColor:'aqua'}}>
        <header style={{fontFamily:'cursive',fontSize:'40px'}}><center>
          Tip Calculator
          </center></header>
          <p>
            Enter Bill Amount
          </p>
          <input type='number' value={this.state.amount} id='amount' placeholder='Enter Bill Amount' onChange={(e)=>{this.setState({amount: e.target.value})}}/>
          <p>
            How was our service
          </p>
          <select id='opt' value={this.state.servic} onChange={(a)=>{this.setState({servic:a.target.value})}}>
            <option value='0.2'>Excellent - 20%</option>
            <option value='0.1'>Moderate - 10%</option>
            <option value='0.05'>Bad - 5%</option>
          </select>
          <p>
          <input type='text' value={this.state.tempdata} placeholder='Enter customer name' onChange={(evt)=>{this.setState({ tempdata:evt.target.value })}}/>
          <input type='button' value='Calculate' style={{backgroundColor:'brown'}} onClick={()=>{this.handleClick()}}/>
          </p>
          <h2>
            Customer List
            <ul>
              {this.state.ourData.map(item => <li>{item}</li>)}
            </ul>
          </h2>
          <table style={{border:'50px solid block',marginLeft:'auto',marginRight:'auto'}}>
            <thead>
              <tr>
                <th><b>Total Customer</b></th>
                <th>Tips</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.ourData.length} </td>
                <td>{this.state.refe.reduce((a,b) => a + b , 0 )}</td>
              </tr>
            </tbody>
          </table>
     </div>
        )
    }
}

export default Tipcalc;

