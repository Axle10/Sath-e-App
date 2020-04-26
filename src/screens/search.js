import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Left, Body } from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor:'#16a108'}}>
          <Left style={{flex: null}}>
            <Button style={{backgroundColor:'#16a108'}} >
              <Icon name="arrow-back" style={{fontSize:20}} />
            </Button>
          </Left>
          <Item>
            <Input placeholder="Search User"/>
            <Icon name="search"/>
          </Item>
        </Header>
      </Container>
    );
  }
}