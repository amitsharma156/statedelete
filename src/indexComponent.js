import React,{Component} from 'react';
// import {BrowserRouter as Router,Link} from 'react-router-dom';

import Axios from 'axios';

export default class IndexComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            post:[]
        };
        
    }
    componentDidMount(){
        console.log('hello1');
        Axios.get('http://localhost:4200/serverports').then(res=>{
            console.log(res);
            if(res.status===200){
                this.setState({post:res.data});
            }
        }).catch(err=>console.log(err));
    }
    onDelete = e=>{
        e.preventDefault();
        const id =e.target.id;
        console.log(id);
        Axios.post(`http://localhost:4200/delete/${id}`).then(res=>{
            console.log(res);
        });
    }
    render(){
        return(
            <div>
                <table className ="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Port</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.post.map((item,index)=>{
                        return(
                            <tr key ={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.port}</td>
                            
                            <td><button className ="btn btn-danger" id ={item.id} onClick={this.onDelete}>Delete</button></td>
                            {/* <td><Link to ={`/edit/${item.id}`} className ="btn btn-warning">Edit</Link></td> */}
                            </tr>
                        );
                    })}    
                </tbody>    
                </table>
            </div>
        )
    }
}