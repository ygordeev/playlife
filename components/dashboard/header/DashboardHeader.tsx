import { FC } from 'react';
import styled from '@emotion/styled';
import DashboardHeaderNavigation from './DashboardHeaderNavigation';

const Header = styled.header`
  padding: 20px 40px;
`

const DashboardHeader: FC = () => {
  return (
    <Header>
      <DashboardHeaderNavigation />
    </Header>
  )
}

export default DashboardHeader;
