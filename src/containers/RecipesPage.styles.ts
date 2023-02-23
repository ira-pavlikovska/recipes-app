import styled from 'styled-components';
import Button from '@mui/material/Button';
import ViewListIcon from '@mui/icons-material/ViewList';
import CollectionsIcon from '@mui/icons-material/Collections';
export const MyRecipes = styled.span`
  font-size: 22px;
  font-weight: bold;
  float: left;
  margin-left: 50px;
`
export const StyledHeader = styled.div `
  align-items: center
`
export const StyledButton = styled(Button)`
  float: right
`
export const StyledContainer = styled.div`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  height: 50px;
`
export const ViewLabel = styled.span`
  font-size: 14px;
  margin-left: 50px;
  margin-top: 9px;
  float: left;
`
export const GalleryIcon = styled(CollectionsIcon)`
  display: inline;
  margin-top: 7px;
  margin-left: 20px;
  float: left;
`
export const ListIcon = styled(ViewListIcon)`
  display: inline;
  margin-left: 20px;
  margin-top: 7px;
  float: left;
`

