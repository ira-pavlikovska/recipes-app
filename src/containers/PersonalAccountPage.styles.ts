import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';

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
  width: 500px;
`
export const ListItemButtons = styled(ListItem)`
  justify-content: center;
  margin-top: 70px;
`
