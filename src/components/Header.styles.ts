import styled from 'styled-components';
import {TextField} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";

export const SearchInput = styled(TextField)`
  width: 580px;
  height: 40px;

  .MuiInputBase-root {
    border-radius: 44px;
  }

  input {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #333943;

    ::placeholder {
      opacity: 1;
      font-style: italic;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.15px;
      color: #8490a3;
    }
  }
`
export const SearchIcon = styled(SearchOutlined) `
  color: #8490a3
`
export const StyledTitle = styled.span`
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  flex: 5
`
export const SearchInputWrapper = styled.span`
  flex: 6;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`
export const TooltipWrapper = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
`
