import Link from 'next/link';
import { FC } from 'react';
import styled from '@emotion/styled';
import { navigationOptions } from '@/constants';

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  color: white;
  list-style: none;
  font-size: 1.2rem;
  font-family: Roboto;
  
  & > li {
    transition: .2s color;
    cursor: pointer;

    &:hover {
      color: #3C8AFF;
    }
  }
`

const DashboardHeaderNavigation: FC = () => {
  return (
    <NavigationList>
      {navigationOptions.map(option => (
        <li key={option.label}>
          <Link href={option.href}>{option.label}</Link>
        </li>
      ))}
    </NavigationList>
  )
}

export default DashboardHeaderNavigation;
