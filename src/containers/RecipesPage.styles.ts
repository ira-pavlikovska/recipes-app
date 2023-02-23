import styled from 'styled-components';
import Button from '@mui/material/Button';
import ViewListIcon from '@mui/icons-material/ViewList';
import CollectionsIcon from '@mui/icons-material/Collections';
export const MyRecipes = styled.span`
  font-size: 22px;
  font-weight: bold;
  float: left;
  margin-left: 30px;
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
`
export const ViewLabel = styled.span`
  font-size: 14px;
  margin-left: 30px;
  float: left;
`
export const GalleryIcon = styled(CollectionsIcon)`
  display: inline;
  margin-left: 20px;
`
export const ListIcon = styled(ViewListIcon)`
  display: inline;
  margin-left: 20px;
`

