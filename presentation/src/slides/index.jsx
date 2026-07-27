import I01_Cover from './I01_Cover'
import I02_ThankYou from './I02_ThankYou'
import I03_PlaybookEvolve from './I03_PlaybookEvolve'
import I04_CMOJobs from './I04_CMOJobs'
import I05_AgenticPlaybooks from './I05_AgenticPlaybooks'
import I06_CurrentState from './I06_CurrentState'
import I07_FutureState from './I07_FutureState'
import S00_Opening from './S00_Opening'
import S01a_WorldBefore from './S01a_WorldBefore'
import S01b_Cliffhanger from './S01b_Cliffhanger'
import V6_Recap from './V6_Recap'
import C00_Journey from './C00_Journey'
import C01_Resolution from './C01_Resolution'
import C02_FullFromTo from './C02_FullFromTo'
import C03_Pipeline from './C03_Pipeline'
import C04_CTA from './C04_CTA'
import { TellBefore, TellAfter } from '../components/DemoTell'
import DemoPlaceholder from '../components/DemoPlaceholder'
import { VIGNETTES } from './vignettes'

// Build the three scenes for each demo vignette.
const vignetteSlides = VIGNETTES.flatMap((v) => {
  const scenes = [
    {
      id: `${v.id}-leadin`,
      label: `${v.section} · Lead-In`,
      component: (
        <TellBefore
          number={v.number}
          section={v.section}
          lines={v.leadIn.lines}
          cliffhanger={v.leadIn.cliffhanger}
        />
      ),
    },
    {
      id: `${v.id}-demo`,
      label: `${v.section} · Live`,
      isDemo: true,
      component: <DemoPlaceholder number={v.number} title={v.handoff.title} description={v.handoff.description} />,
    },
    {
      id: `${v.id}-recap`,
      label: `${v.section} · Recap`,
      component:
        v.id === 'v6' ? (
          <V6_Recap />
        ) : (
          <TellAfter
            number={v.number}
            section={v.section}
            lines={v.recap.lines}
            shift={v.recap.shift}
            transition={v.recap.transition}
          />
        ),
    },
  ]
  return scenes
})

export const slides = [
  // Part A — Project Blueprint intro (account-team lead-in)
  { id: 'I01', label: 'Cover', component: <I01_Cover />, hideChrome: true },
  { id: 'I02', label: 'Thank You', component: <I02_ThankYou /> },
  { id: 'I03', label: 'Playbook Must Evolve', component: <I03_PlaybookEvolve /> },
  { id: 'I04', label: 'CMO Jobs-to-be-Done', component: <I04_CMOJobs /> },
  { id: 'I05', label: 'Agentic Playbooks', component: <I05_AgenticPlaybooks /> },
  { id: 'I06', label: 'Current State', component: <I06_CurrentState /> },
  { id: 'I07', label: 'Future State', component: <I07_FutureState /> },

  // Part B — Precision at the Edge
  { id: 'S00', label: 'Limbic Opening', component: <S00_Opening />, hideChrome: true },
  { id: 'S01a', label: 'The World Before', component: <S01a_WorldBefore /> },
  { id: 'S01b', label: 'The Cliffhanger', component: <S01b_Cliffhanger /> },

  ...vignetteSlides,

  // Section 08 — The Resolution
  { id: 'C00', label: 'The Story Spine', component: <C00_Journey /> },
  { id: 'C01', label: 'The Resolution', component: <C01_Resolution /> },
  { id: 'C02', label: 'Full Transformation', component: <C02_FullFromTo /> },
  { id: 'C03', label: '$2.4M Pipeline', component: <C03_Pipeline /> },
  { id: 'C04', label: 'Call to Action', component: <C04_CTA /> },
]
