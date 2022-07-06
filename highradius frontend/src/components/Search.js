import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Highlights from './SearchTest';
import { getThemeProps } from '@material-ui/styles';
import { ListItem } from '@material-ui/core';


export default function Search(props) {

  const filteredData = (el) => {
    if (props.input === ''){
      return el
    }
    else{
      return el.name.toLowerCase().includes(props.input)
    }
  }

  return (
    <div>
      
      </div>
  );
}
