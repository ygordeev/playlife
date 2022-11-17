import { SvgIconProps } from '@mui/material/SvgIcon';

interface LandingDisclaimerSectionStyle {
  name: string,
  color: SvgIconProps['color'],
  topics: string[],
  title?: string,
}

export const landingDisclaimerSections: LandingDisclaimerSectionStyle[] = [
  {
    name: 'currentFeatures',
    color: 'success',
    topics: [
      'Create and keep track of your tasks',
      'Add and customize your own achievements',
      'Get daily reports and statistics',
    ],
  },
  {
    name: 'futureFeatures',
    title: 'The following features are in active development:',
    color: 'warning',
    topics: [
      'Mobile-friendly view',
      'Individual learning paths',
      'Searching for tasks',
      'Calendar',
      'Personal accounts and authentication',
    ],
  },
]
