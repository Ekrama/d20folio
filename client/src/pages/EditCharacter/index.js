import React from 'react';
import API from '../../util/API';
import { Input, Button,Form, FormGroup,Label,Col,Row, Container, jumbotron}  from 'reactstrap'

export default class EditCharacter extends React.component {
    state ={
        ImageUrl:"",

        STR:"10",
        DEX:"10",
        DEX:"10",
        INT:"10",
        WIS:"10",
        CHA:"10",



    }
    handleInput =field => event =>{
        const {value} =event.target;
        this.setState( {
            [field]: value
        })
    }

    clearForm =() => {

    }
    submitCharacterCreation = ()=>{
        const newChar = {
            name :this.state.name,
            ImageUrl: this.state.ImageUrl,

            STR:this.state.STR,
            DEX:this.state.DEX,
            CON:this.state.CON,
            INT:this.state.INT,
            WIS:this.state.WIS,
            CHA:this.state.CHA,

        }
        API.createCharacter()
        .then(() => this.clearForm())
    }

    render (){
        return(
            this.props.new?
            <Container>
                <jumbotron><h1>create a new Character</h1></jumbotron>

                <Row>
                    <col md={6}>
                    <FormGoup>
                        <Label>Character Name</Label>
                    <input 
                    name ="name"
                    value ={this.state.name}
                    onChange={this.handleInput("name")}
                    
                    />
                    </FormGoup>

                    <FormGoup>

                        <Label>Image Url</Label>
                    <input 
                    name ="str"
                    value ={this.state.STR}
                    onChange={this.handleInput("STR")}
                    type="number"
                    min="3" max ="18"
                    />
                    </FormGoup>
                    <FormGoup>

                        <Label>Dexterity</Label>
                    <input 
                    name ="Image"
                    value ={this.state.DEX}
                    onChange={this.handleInput("DEX")}
                    type="number"
                    min="3" max ="18"
                    
                    />
                    </FormGoup>
                    <FormGoup>

                        <Label>Constitutin</Label>
                    <input 
                    name ="Image"
                    value ={this.state.component}
                    onChange={this.handleInput("CON")}
                    type="number"
                    min="3" max ="18"
                    
                    />
                    </FormGoup>

                    <FormGoup>

                        <Label>Inteligence</Label>
                    <input 
                    name ="Image"
                    value ={this.state.INT}
                    onChange={this.handleInput("INt")}
                    type="number"
                    min="3" max ="18"
                    
                    />
                    </FormGoup>

                    <FormGoup>

                        <Label>WIS</Label>
                    <input 
                    name ="Image"
                    value ={this.state.WIS}
                    onChange={this.handleInput("Wis")}
                    type="number"
                    min="3" max ="18"
                    
                    />
                    </FormGoup>
                    <FormGoup>

                        <Label>Charisma</Label>
                    <input 
                    name ="Image"
                    value ={this.state.CHA}
                    onChange={this.handleInput("CHA")}
                    type="number"
                    min="3" max ="18"
                    
                    />
                    </FormGoup>
                    <img alt="" src ={this.state.ImageUrl}/>

                    </col>
                    <col md={6}>
                    </col>
                </Row>
            </Container>
           :null
        )
    }
}