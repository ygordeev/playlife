import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { SearchInput } from '@/components/inputs';
import DashboardHeaderNavigation from './DashboardHeaderNavigation';

const Header = styled('header')`
  display: flex;
  gap: 50px;
  padding: 20px 40px;
`

const DashboardHeader: FC = () => {
  return (
    <Header>
      <DashboardHeaderNavigation />
      <SearchInput />
    </Header>
  )
}

export default DashboardHeader;
