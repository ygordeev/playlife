import { FC } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import TuneIcon from '@mui/icons-material/Tune';
import Divider from '@mui/material/Divider';

const SearchInputWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  padding: 5px 15px;
  background-color: #1E1F25;
  border-radius: 21px;

  input {
    color: #e8e8e8;
  }
`

const LightDivider = styled(Divider)`
  border-color: rgb(255, 255, 255, 0.1);
`

const SearchFilterIcon = styled(TuneIcon)`
  cursor: pointer;
`

const SearchInput: FC = () => {
  return (
    <SearchInputWrapper>
      <ManageSearchIcon color="primary" />
      <InputBase
        placeholder="Active tasks"
        fullWidth
      />
      <LightDivider
        orientation="vertical"
        variant="middle"
      />
      <SearchFilterIcon color="primary" />
    </SearchInputWrapper>
  )
}

export default SearchInput;
