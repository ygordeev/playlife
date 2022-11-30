import Link from 'next/link'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import ReportIcon from '@mui/icons-material/Report'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { HorizontalCenteredStack } from '@/components/layout'
import { landingDisclaimerSections } from '@/constants'
import { getTextGradientStyle } from '@/utils'

const headingStyle = {
  display: 'inline',
  fontWeight: 'bold',
  fontSize: '3rem',
  lineHeight: '3rem',
  ...getTextGradientStyle('90deg, #3cc758, #ca8919'),
}

const LandingDisclaimer = () => {
  return (
    <Paper sx={{ maxWidth: 'sm', p: 5 }}>
      <Stack spacing={4}>
        <Stack alignItems="center">
          <Typography sx={headingStyle}>PLAYLIFE</Typography>
          <Typography variant="subtitle2" color="grey.500">
            Pre-Alpha version
          </Typography>
        </Stack>

        <Typography borderLeft={2} borderColor="primary.main" mb={2} pl={1}>
          Playlife is a task management system designed to gamify your daily routine.
          Want to study Japanese? Want to learn how to cook? Want to plan your relocation?
          Then Playlife is just what you need!
        </Typography>

        {landingDisclaimerSections.map(section => (
          <Stack key={section.name}>
            {section.topics.map(topic => (
              <HorizontalCenteredStack key={topic} spacing={1}>
                <DoubleArrowIcon color={section.color} />
                <Typography fontStyle="italic">{topic}</Typography>
              </HorizontalCenteredStack>
            ))}
          </Stack>
        ))}

        <HorizontalCenteredStack spacing={2}>
          <ReportIcon fontSize="large" color="error" />
          <Typography color="error.light">
            This website is currently in alpha stage and available only to developers.
            There is no real connection with server. All data is stored in your browser only.
          </Typography>
        </HorizontalCenteredStack>

        <Link href="/tasks">
          <Button variant="contained">Explore</Button>
        </Link>
      </Stack>
    </Paper>
  )
}

export default LandingDisclaimer