import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ebeef2;
  align-items: center;
  min-height: 100vh;
`
export const LabelStyled = styled.div `
  display: inline;
  font-size: 25px;
`
export const IconButtonStyled = styled(IconButton)`
  display: inline;
  margin-left: 20px;
`
export const ListItemStyled = styled(ListItem)`
  padding-top: 20px;
`
export const ListItemEditStyled = styled(ListItem)`
  padding-top: 20px;
  padding-right: 50px;
`
export const ListItemButtons = styled(ListItem)`
  justify-content: center;
  display: inline;
  margin-top: 70px;
  margin-left: 180px ;
`
export const StyledList  = styled(List)`
  display: block;
  justify-content: center;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  align-items: center;
  height: 600px;
  width: 650px;
  text-align: center;
`
