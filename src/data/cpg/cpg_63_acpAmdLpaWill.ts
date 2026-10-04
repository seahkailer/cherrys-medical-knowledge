import { CpgDocument } from '../types';

export const acpAmdLpaWill: CpgDocument = {
  id: 'cpg-acp-amd-lpa-will',
  condition: 'ACP, AMD, LPA and Will',
  source: '63 ACP AMD LPA and Will.pdf',
  reviewDate: 'Updated 27 March 2024',
  advisors: 'Dr Yeo Hui Nan, Dr Alicia Boo, Dr Tan Wee Hian',
  sections: [
    {
      heading: 'Overview',
      blocks: [
        { type: 'text', content: 'This information sheet covers four key legal and healthcare planning documents: Advance Care Planning (ACP), Advance Medical Directive (AMD), Lasting Power of Attorney (LPA), and Will Making. Each serves a distinct purpose in planning for future healthcare and personal affairs.' },
        { type: 'table', headers: ['Document', 'Who Does It?', 'What Is It?', 'When Does It Come Into Effect?'], rows: [
          { cells: ['Advance Care Planning (ACP) — Types: General, Disease-specific, Preferred Plan of Care (PPC)', 'MSWs/certified financial counsellors in NUP mostly do general ACP; some MSWs certified in PPC. NUP Doctor to refer suitable patients to MSW for ACP discussions.', 'An ongoing communication process of a patient\'s values and wishes regarding planning for his current and future healthcare. Explores what is important to the patient, helps to honour his preferences with regards to treatment near end of life, and decreases the caregiver\'s burden in decision-making. Involves a nominated healthcare spokesperson (NHS) who can make healthcare decisions on behalf of the patient.', 'Guidance of treatment at different stages of the disease. Not a one-off discussion.'] },
          { cells: ['Advance Medical Directive (AMD)', 'Doctor + 1 witness (fellow doctor/nurse/PSA/PCA). NUP Doctor functions as the first witness and ensures the patient: (1) Understands the nature and implications of making an AMD; (2) Is willing to sign without compulsion; (3) Understands the AMD can be revoked any time; (4) Is of sound mind (oriented to time and space, able to name himself and family members, understands the nature and implications of the directive).', 'A legal document in which a person, who is mentally capable, declares in advance that he/she refuses extraordinary life-sustaining treatment if he/she becomes terminally ill and unconscious and where death is imminent. Witnessed by a registered medical practitioner and another witness.', 'Only when patient is: (a) Terminally ill; AND (b) Unconscious or incapable of exercising rational judgment; AND (c) Death is reasonably expected within a short time even with treatment.'] },
          { cells: ['Lasting Power of Attorney (LPA) — Form 1: General powers with basic restrictions. Form 2: Customised powers (drafted by lawyer).', 'Accredited doctors ($25–$59); Practicing lawyers ($80–$300); Registered psychiatrists ($265–$450). Fee waiver for LPA Form 1 by Singapore Citizens until 31 March 2026. NUP Doctor to direct clients to one of the above or Office of the Public Guardian website.', 'A legal document which allows a Donor to voluntarily appoint one or more Donee(s) to make decisions and act on his behalf if he loses mental capacity in future. A Donee can be appointed to act in two broad areas: personal welfare and property & affairs matters.', 'Effective when a patient loses mental capacity. Doctors will decide for the patient\'s best interest when it comes to life sustaining treatment.'] },
          { cells: ['Will', 'Lawyers. NUP Doctor to direct clients accordingly. IMH does testamentary capacity assessment for their own patients WITH mental health conditions. IMH rejects will-making mental capacity assessment for those with no mental illness.', 'A legal document in which a person states how their assets and estate should be distributed after death. Requires testamentary capacity: (a) Knows what a will is; (b) Knows the extent of property being distributed; (c) Knows who should be the natural beneficiaries; (d) Free from undue influence.', 'Upon death of the person.'] },
        ]},
      ],
    },
    {
      heading: 'Timeline and Relationships',
      blocks: [
        { type: 'text', content: 'ACP is an ongoing process throughout a patient\'s life — not a one-off discussion. It guides treatment at different stages of the disease.' },
        { type: 'text', content: 'AMD is activated only when all three conditions are met simultaneously: (1) Patient is terminally ill; (2) Patient is unconscious or incapable of rational judgment; (3) Death is reasonably expected within a short time even with extraordinary life-sustaining treatment.' },
        { type: 'text', content: 'LPA is activated when a patient loses mental capacity. Without an LPA, family members do not automatically have legal authority to make decisions for the patient. A Court-Appointed Deputy (CAD) may be required in such cases.' },
        { type: 'text', content: 'A Will comes into effect upon death. It ensures assets are distributed according to the person\'s wishes. Without a will, assets are distributed under the Intestate Succession Act.' },
        { type: 'list', items: [
          { text: 'NUP Doctor role for ACP: Refer suitable patients to MSW for ACP discussions.' },
          { text: 'NUP Doctor role for AMD: Act as first witness; ensure patient fulfils criteria for sound mind and informed consent.' },
          { text: 'NUP Doctor role for LPA: Direct clients to accredited doctors, lawyers, or Office of the Public Guardian website.' },
          { text: 'NUP Doctor role for Will: Direct clients to lawyers. IMH handles mental capacity assessment only for patients with mental illness.' },
        ]},
      ],
    },
  ],
};
