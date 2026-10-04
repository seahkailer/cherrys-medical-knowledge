import { CpgDocument } from '../../types';

export const ophthalmology: CpgDocument = {
  id: 'cpg-ophthalmology-flipchart',
  condition: 'Practical Approaches to Common Ophthalmic Problems',
  source: 'The Eye Institute, National Healthcare Group, Singapore',
  reviewDate: '2004 (Edition)',
  advisors: [
    'Dr Victor Yong, Director, The Eye Institute',
    'A/Prof Paul Chew — Glaucoma',
    'A/Prof Au Eong Kah Guan — Vitreo-Retina',
    'Dr Lim Tock Han — Vitreo-Retina',
    'Dr Heng Wee Jin — Cornea & Refractive Surgery',
    'Dr Shantha Amrith — Oculoplastics',
    'Dr Caroline Chee Ka Lin — Vitreo-Retina',
    'Dr Fam Han Bor — Cornea & Refractive Surgery',
  ],
  sections: [
    {
      heading: 'Acute Loss of Vision',
      blocks: [
        {
          type: 'text',
          content:
            'Acute loss of vision is a medical emergency. Most cases require urgent referral. Vascular causes are the most common.',
        },
        {
          type: 'list',
          items: [
            { text: 'Vascular causes: Retinal Artery Occlusion (CRAO/BRAO), Retinal Vein Occlusion (CRVO/BRVO), Acute Ischaemic Optic Neuropathy' },
            { text: 'Other causes: Vitreous Haemorrhage, Optic Neuritis, Retinal Detachment' },
          ],
        },
        {
          type: 'text',
          content: '3-step approach to acute loss of vision:',
        },
        {
          type: 'table',
          headers: ['Step', 'Finding', 'Likely Diagnosis'],
          rows: [
            { cells: ['1. Pain?', 'Yes', 'See "Acute Red Eye"'] },
            { cells: ['1. Pain?', 'No', 'Proceed to Step 2'] },
            { cells: ['2. Pupil reaction — Brisk', 'Normal red reflex', 'CRVO (non-ischaemic), Submacular Haemorrhage'] },
            { cells: ['2. Pupil reaction — Brisk', 'Impaired red reflex', 'Vitreous Haemorrhage'] },
            { cells: ['2. Pupil reaction — Sluggish/RAPD', 'Normal red reflex', 'CRAO, CRVO (ischaemic), Optic Neuritis'] },
            { cells: ['2. Pupil reaction — Sluggish/RAPD', 'Impaired red reflex', 'Retinal Detachment'] },
          ],
        },
      ],
    },
    {
      heading: 'Chronic Loss of Vision',
      blocks: [
        {
          type: 'text',
          content: 'Causes of chronic loss of vision are usually painless.',
        },
        {
          type: 'list',
          items: [
            { text: 'Macular disorders: Diabetic Maculopathy, Age-Related Macular Degeneration (AMD)' },
            { text: 'Optic nerve disorders: Optic Atrophy, Advanced Glaucoma' },
            { text: 'Other: Cataract, Refractive Error' },
          ],
        },
        {
          type: 'text',
          content: '3-step approach to chronic loss of vision:',
        },
        {
          type: 'table',
          headers: ['Step', 'Finding', 'Likely Diagnosis'],
          rows: [
            { cells: ['1. Pinhole acuity', 'Significant improvement (usually to 6/12 or better)', 'Refractive Error'] },
            { cells: ['1. Pinhole acuity', 'Minimal improvement', 'Proceed to Step 2'] },
            { cells: ['2. Pupil reaction — Brisk', 'Normal red reflex', 'Macular Pathology'] },
            { cells: ['2. Pupil reaction — Brisk', 'Impaired red reflex', 'Cataract'] },
            { cells: ['2. Pupil reaction — Sluggish/RAPD', 'Normal red reflex', 'Optic Atrophy'] },
            { cells: ['2. Pupil reaction — Sluggish/RAPD', 'Impaired red reflex', 'Chronic Retinal Detachment'] },
          ],
        },
      ],
    },
    {
      heading: 'Intermittent Blurring of Vision',
      blocks: [
        {
          type: 'table',
          headers: ['Duration', 'Quality', 'Likely Cause'],
          rows: [
            { cells: ['Seconds', 'Dark', 'Raised intracranial pressure ✶'] },
            { cells: ['Minutes', 'Dark curtain', 'Amaurosis Fugax'] },
            { cells: ['Minutes', 'Shimmering/vibrating lights', 'Migraine ✶'] },
            { cells: ['Hours', 'Haloes around lights', 'Intermittent Angle Closure Glaucoma ✶'] },
            { cells: ['Variable', 'Misty, clears with blinking', 'Dry Eyes'] },
          ],
        },
        {
          type: 'text',
          content: '✶ Commonly associated with headache. Note: Intermittent darkening of vision is more likely amaurosis fugax and should be referred urgently.',
        },
        {
          type: 'list',
          items: [
            { text: 'Causes of intermittent blurring:', subItems: ['Intermittent Angle Closure Glaucoma (haloes)', 'Amaurosis Fugax (dark curtain for minutes)', 'Migraine (shimmering lights)', 'Raised ICP (transient darkness for seconds)', 'Dry Eyes (misty, clears with blinking)'] },
          ],
        },
      ],
    },
    {
      heading: 'Acute Red Eye',
      blocks: [
        {
          type: 'text',
          content:
            'Most acute red eyes are painful. Common, usually self-limiting and painless: Conjunctivitis, Sub-conjunctival Haemorrhage. Less common, more serious and painful ("AEIOU"): Episcleritis/Scleritis, Iritis/Endophthalmitis, Orbital Cellulitis, Corneal Ulcer, Acute Angle Closure Glaucoma.',
        },
        {
          type: 'list',
          items: [
            {
              text: 'When is it NOT straightforward conjunctivitis? Refer if any of:',
              subItems: [
                'Significant blurring of vision',
                'Significant pain',
                'Any corneal abnormality (loss of clarity, discrete lesion)',
                'Only unilateral involvement even after 5 days',
                'No improvement at all after 1 week of treatment',
                'Significant lid / peri-orbital swelling',
              ],
            },
            {
              text: 'History: refer urgently if:',
              subItems: [
                'History of contact lens use',
                'History of trauma',
                'History of recent eye surgery',
                'Unilateral for >4 days',
                'Bilateral for >1 week',
              ],
            },
            {
              text: 'Physical examination: refer urgently if:',
              subItems: [
                'Poor vision',
                'Pupil abnormalities',
                'Cornea hazy or corneal ulcer present (may be Acute Glaucoma, Keratitis or Iritis)',
              ],
            },
            {
              text: 'Features suggesting conjunctivitis (usually manageable conservatively):',
              subItems: [
                'Discharge or mucous strands',
                'Preauricular lymph nodes',
                'Note: gonococcal conjunctivitis should be excluded if copious discharge with genital discharge',
              ],
            },
          ],
        },
        {
          type: 'text',
          content:
            'Foreign body sensation with red eye: consider Conjunctivitis, Conjunctival/corneal foreign body (stains positive with fluorescein), Corneal abrasion or infective keratitis, or Dry Eyes (usually more irritation than pain).',
        },
      ],
    },
    {
      heading: 'Painful White Eye',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: 'Causes of painful white eye (G.H.O.S.T.):',
              subItems: [
                'Glaucoma (early)',
                'Herpes Zoster (early)',
                'Optic Neuritis',
                'Sinusitis',
                'Temporal Arteritis',
              ],
            },
            {
              text: 'Other causes — headache-related:',
              subItems: [
                'Raised intraocular pressure',
                'Migraine',
                'Tension headache',
                'Cluster headache',
                'Trigeminal neuralgia',
              ],
            },
            { text: 'Dry Eyes — see dedicated section' },
          ],
        },
      ],
    },
    {
      heading: 'Double Vision',
      blocks: [
        {
          type: 'text',
          content: 'First determine if vision is blurred or doubled, then uniocular or binocular.',
        },
        {
          type: 'table',
          headers: ['Type', 'Orientation', 'Likely Cause'],
          rows: [
            { cells: ['Blurred vision', '—', 'Approach as for Blurred Vision'] },
            { cells: ['Uniocular diplopia', '—', 'Astigmatism, Dislocated Lens, Cataract'] },
            { cells: ['Binocular diplopia', 'Vertical', 'Graves disease, Raised ICP'] },
            { cells: ['Binocular diplopia', 'Horizontal', 'III, IV, VI nerve palsy, Myasthenia Gravis — refer'] },
          ],
        },
      ],
    },
    {
      heading: 'Floaters (Dots in Vision)',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: 'Causes:',
              subItems: [
                'Acute Posterior Vitreous Detachment (PVD) / Vitreous Degeneration',
                'Retinal Tear',
                'Retinal Detachment (RD)',
                'Vitreous Haemorrhage',
                'Vitritis / Posterior Uveitis',
              ],
            },
            {
              text: 'Refer if:',
              subItems: [
                'Onset is acute (within one month)',
                'Associated with flashes of light, visual field defect or visual loss',
                'History of diabetes, high myopia, or trauma',
                'Family history of retinal breaks or retinal detachment',
              ],
            },
            {
              text: 'Observe if:',
              subItems: [
                'Floaters are fewer than 10 and are chronic (>6 months)',
                'None of the above high-risk features',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Distorted Vision (Metamorphopsia)',
      blocks: [
        {
          type: 'text',
          content:
            'Distorted vision is caused by any lesion involving the macula, in particular:',
        },
        {
          type: 'list',
          items: [
            { text: 'Age-related Macular Degeneration (AMD) — dry or wet' },
            { text: 'Epi-Retinal Membrane (ERM)' },
            { text: 'Central Serous Retinopathy (CSR)' },
            { text: 'Retinal Detachment (RD) involving the macula' },
            { text: 'Choroidal Neovascularisation (CNV) from causes other than AMD' },
          ],
        },
        {
          type: 'table',
          headers: ['Presentation', 'Likely Cause', 'Urgency'],
          rows: [
            { cells: ['Acute onset with visual field defect, flashes and floaters', 'RD involving macula', 'Urgent referral'] },
            { cells: ['Recent onset', 'AMD / CNV', 'Early referral'] },
            { cells: ['Longstanding, stable or slowly progressive', 'ERM, CSR', 'Non-urgent referral'] },
          ],
        },
      ],
    },
    {
      heading: 'Tired Eyes & Teary Eyes',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: 'Causes of tired eyes:',
              subItems: ['Dry Eyes', 'Presbyopia / Outdated spectacle prescription', 'Exophoria', 'Myasthenia Gravis'],
            },
            {
              text: 'Teary eyes — approach:',
              subItems: [
                'Mild ("watery eyes") with ocular irritation: look for local cause (lid problems — entropion, ectropion; lash problems — inturning); treat with ocular lubricants for dry eyes',
                'Severe epiphora (tears overflow onto cheek): usually naso-lacrimal duct obstruction — may be associated with discharge; refer to ophthalmologist if not better',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Four Common Benign Conditions',
      blocks: [
        {
          type: 'text',
          content:
            'These conditions can usually be safely managed by the family physician. However, if severe or recalcitrant, they can cause visual loss and the patient should be referred.',
        },
        {
          type: 'list',
          items: [
            {
              text: 'Dry Eyes:',
              subItems: [
                'Causes: simple dry eyes (most common), lid conditions (blepharitis, meibomitis, lagophthalmos, chronic allergy), drug-induced (anticholinergics), auto-immune conditions',
                'Symptoms: INTERMITTENT discomfort, foreign body sensation, blurred vision that clears with blinking, paradoxical tearing, mild bilateral pink eye',
                'Examination: normal visual acuity, no obvious abnormality except possibly blepharitis',
                'Management: therapeutic trial of tear supplements at 3-hourly intervals for 1 week. If no improvement, refer.',
              ],
            },
            {
              text: 'Pinguecula and Pterygium:',
              subItems: [
                'Refer when the pterygium head has crossed the midline between the pupil margin and the limbus, if patient is unhappy cosmetically, or if there is significant discomfort.',
              ],
            },
            {
              text: 'Allergic Conjunctivitis:',
              subItems: [
                'Acute onset of chemosis (conjunctival swelling) in a relatively non-injected eye',
                'Itch and irritation are prominent; associated with dust exposure',
                'Resolves in 24–72 hours',
                'Treatment: anti-histamine eye drops',
                'If chemosis is not itchy but associated with severe conjunctival injection, ophthalmoplegia, ptosis and headache — refer to A&E to exclude cavernous sinus lesions',
              ],
            },
            {
              text: 'Vernal Conjunctivitis (variant of allergic eye disease):',
              subItems: [
                'Acute-on-chronic itchy red eyes with mucous production, lid swelling, ptosis and blurred vision',
                'History of systemic atopy: eczema, asthma, allergic rhinitis',
                'Management: eosinophil/mast cell stabilisers (e.g. Sodium Cromoglycate); environment control',
                'Refer severe/recalcitrant cases or when cornea is involved',
              ],
            },
            {
              text: 'Subconjunctival Haemorrhage:',
              subItems: [
                'Brilliant red patch, no injection of blood vessels, fairly distinct border',
                'No associated ocular symptoms: no pain, photophobia, or decreased vision',
                'Resolves spontaneously over 2–3 weeks',
                'Management: observation and reassurance (unless result of significant ocular trauma)',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Ocular Trauma',
      blocks: [
        {
          type: 'text',
          content:
            'Most ocular trauma cases should be referred, especially sharp or blunt eye injury with significant force.',
        },
        {
          type: 'table',
          headers: ['Danger Signs (any one → refer urgently)', 'Reassuring Signs (all must be present)'],
          rows: [
            { cells: ['Poor visual acuity', 'Good visual acuity'] },
            { cells: ['RAPD present', 'No RAPD'] },
            { cells: ['Poor view of iris and pupil', 'Good view of iris and pupil'] },
            { cells: ['Distorted pupil shape', 'Round pupil'] },
            { cells: ['Loss of red reflex', 'Good red reflex'] },
          ],
        },
        {
          type: 'list',
          items: [
            {
              text: 'Ocular Foreign Body — approach:',
              subItems: [
                'History of high-velocity FB (e.g. hammering): refer urgently to exclude intraocular FB even if eye looks normal',
                'Check for corneal FB and signs of corneal perforation — refer',
                'Conjunctival FB: removal with cotton bud; evert lids to check',
                'Stain with fluorescein: check for corneal ulcer, abrasion, linear abrasion — refer',
              ],
            },
            {
              text: 'Chemical Eye Injury — immediate management:',
              subItems: [
                'Test with litmus paper (alkaline injury is more severe) — only if readily available; do NOT delay irrigation',
                'Immediate prolonged irrigation: 15 minutes, 1L of Normal Saline',
                'Technique: use drip set, look in 4 directions, pull lower lid down when looking up, evert upper lid when looking down',
                'Obtain name of chemical',
                'Refer to A&E',
              ],
            },
          ],
        },
      ],
    },
  ],
};
