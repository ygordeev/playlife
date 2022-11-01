import { FC } from 'react';
import * as Styled from './DashboardHeaderStyles';

const DashboardHeader: FC = () => {
  return (
    <header>
      <Styled.NavigationList>
        <li>Tasks</li>
      </Styled.NavigationList>
    </header>
  )
}

export default DashboardHeader;
