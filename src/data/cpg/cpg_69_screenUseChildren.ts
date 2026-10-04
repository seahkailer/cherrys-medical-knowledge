import { CpgDocument } from '../types';

export const screenUseChildren: CpgDocument = {
  id: 'cpg-screen-use-children',
  condition: 'Guidance on Screen Use in Children',
  source: '69 Guidance on Screen Use in Children.pdf',
  reviewDate: 'March 2023',
  advisors: 'Expert subgroup: paediatricians, academics, IMH, MOH, MOE, TOUCH Community Services, ECDA',
  sections: [
    {
      heading: 'Overview and Evidence Summary',
      blocks: [
        { type: 'text', content: 'This advisory provides practical suggestions to families with children aged 0–12 years on how to organise and manage their children\'s screen use. Guidance for different age groups highlights key points that families should be aware of.' },
        { type: 'text', content: 'Children use screens more than ever. Benefits include: family co-viewing, educational screen use (academic gains, cognitive development), and older children maintaining friendships online.' },
        { type: 'text', content: 'Potential downsides, particularly for children below 36 months (a sensitive period of brain development): difficulty absorbing information from 2D screens, poorer language skills and shorter attention spans. Associations also seen with insufficient sleep, sedentary behaviours, increased obesity, poorer mental health, eye strain and dry eyes.' },
        { type: 'text', content: 'At present, there is limited evidence of what constitutes a safe time limit. Parental supervision and collaborating with children to adopt healthy screen habits is recommended over strict time limits.' },
      ],
    },
    {
      heading: 'Overall Guidance for Healthy Screen Use',
      blocks: [
        { type: 'text', content: 'Healthy screen use means choosing appropriate and safe screen content, engaging in active screen use, and co-viewing media with an adult.' },
        { type: 'list', items: [
          { text: 'Active Screen Use: involves cognitively or physically engaging in screen-based activities, such as completing homework on a computer, following an exercise or art/craft programme online, playing video games, or using screens to socially connect through video chatting.' },
          { text: 'Co-viewing: an adult watches TV/video programmes with children while discussing what they are viewing, keeping children actively engaged.' },
          { text: 'Manage screen use based on the needs of the individual child. Screen use may displace physical activities, in-person social interactions and sleep. Have a plan that balances screen use with other activities.' },
          { text: 'Parents should be present and engaged when children are using devices. Have open, continual conversations with children about what they are doing online.' },
          { text: 'Parents should role-model positive screen-use behaviours. Be mindful of own device use and whether it interrupts interactions with children.' },
          { text: 'Designate screen-free times and zones (e.g. meal times, bedrooms, 1 hour before bedtime).' },
          { text: 'Ensure adequate physical activity, outdoor play, sleep, and face-to-face social interaction.' },
        ]},
      ],
    },
    {
      heading: 'Age-Specific Guidance: Below 18 Months',
      blocks: [
        { type: 'text', content: 'Children below 18 months have difficulty absorbing information from two-dimensional screens.' },
        { type: 'list', items: [
          { text: 'Limit: Avoid screen use other than video chatting (e.g. with family members).' },
          { text: 'If video chatting: Parents should be with the child and help them understand the interaction.' },
          { text: 'Focus on real-world experiences: talking, reading, singing, and playing together.' },
        ]},
      ],
    },
    {
      heading: 'Age-Specific Guidance: 18 Months to Below 36 Months',
      blocks: [
        { type: 'list', items: [
          { text: 'Suggested limit: No more than 1 hour per day of screen use (excluding video chatting).' },
          { text: 'Choose high-quality, age-appropriate educational content.' },
          { text: 'Co-view with child: Watch together and help child understand what is being viewed.' },
          { text: 'Avoid using screens as a pacifier or to manage emotions — this may prevent children from learning to self-regulate.' },
          { text: 'No screens at least 1 hour before bedtime.' },
        ]},
      ],
    },
    {
      heading: 'Age-Specific Guidance: 36 Months to Below 6 Years',
      blocks: [
        { type: 'list', items: [
          { text: 'Suggested limit: No more than 1 hour per day of recreational screen use.' },
          { text: 'Choose age-appropriate and educational content.' },
          { text: 'Co-view when possible; discuss content with child.' },
          { text: 'Screen use should not displace physical activity, social play, reading, or sleep.' },
          { text: 'No screens at meals and at least 1 hour before bedtime.' },
        ]},
      ],
    },
    {
      heading: 'Age-Specific Guidance: 6 to 12 Years',
      blocks: [
        { type: 'list', items: [
          { text: 'No specific time limit recommended, but encourage balance with other activities.' },
          { text: 'Prioritise sleep (9–11 hours for ages 6–13), physical activity, homework, and face-to-face interactions.' },
          { text: 'Teach children about safe and responsible online behaviour (cyberbullying, privacy, age-appropriate content).' },
          { text: 'Agree on family rules for screen use (when, where, what content).' },
          { text: 'No screens in bedrooms at night. No screens during meals.' },
          { text: 'Monitor online activities without being intrusive — maintain open communication.' },
        ]},
      ],
    },
    {
      heading: 'Eye Health and Screen Use',
      blocks: [
        { type: 'text', content: 'Prolonged near work (including screen use) is associated with myopia progression in children. The following measures may help:' },
        { type: 'list', items: [
          { text: 'Follow the 20-20-20 rule: every 20 minutes of screen use, look at something 20 feet away for 20 seconds.' },
          { text: 'Ensure good lighting when using screens.' },
          { text: 'Encourage at least 2 hours of outdoor time daily — protective against myopia.' },
          { text: 'Maintain appropriate viewing distance (arm\'s length for tablets, appropriate distance for TV).' },
          { text: 'Seek eye examination if child complains of eye strain, headaches, or squinting.' },
        ]},
      ],
    },
    {
      heading: 'Role of Healthcare Professionals',
      blocks: [
        { type: 'text', content: 'Healthcare professionals can support families by:' },
        { type: 'list', items: [
          { text: 'Asking about screen use habits during consultations as part of developmental and lifestyle assessment.' },
          { text: 'Providing age-specific guidance as outlined above.' },
          { text: 'Advising parents on setting healthy boundaries and role-modelling positive screen habits.' },
          { text: 'Referring to the HPB/MOH infographic for parents (https://go.gov.sg/screenadvisory-infographic).' },
          { text: 'Screening for screen-related concerns: sleep problems, behavioural issues, obesity, myopia, online safety issues.' },
          { text: 'Working with schools and community organisations to promote healthy screen use.' },
        ]},
      ],
    },
  ],
};
