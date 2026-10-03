import { CpgDocument } from '../types';

export const earInfections: CpgDocument = {
  id: 'ear-infections',
  condition: 'Ear Infections',
  source: '24 NUP CPG - Ear Infections.pdf',
  reviewDate: 'July 2025',
  advisors: 'Dr Goh Xue Ying (Consultant, Department of Otolaryngology – Head & Neck Surgery, NUH)',
  sections: [
    {
      heading: 'Middle Ear Infections (Otitis Media) — Introduction',
      blocks: [
        { type: 'text', content: 'Otitis media (OM) encompasses a spectrum of diseases including Acute Otitis Media (AOM), Otitis Media with Effusion (OME) and Chronic Suppurative Otitis Media (CSOM). AOM is a self-limiting infection mainly affecting children, attributable to eustachian-tube dysfunction, most often caused by an upper respiratory infection. CSOM is characterized by chronic suppurative middle ear inflammation usually associated with a persistently perforated tympanic membrane. OME is characterized by the presence of glue-like fluid behind an intact tympanic membrane without signs of acute inflammation.' },
        { type: 'text', content: 'Epidemiology: AOM is one of the most common diseases in childhood, with ~80% of all children experiencing it during their lifetime. Most commonly between 6 and 12 months of age. Microbiology: Bacteria (Streptococcus pneumoniae, non-typeable Haemophilus influenzae, Moraxella catarrhalis) or Viruses (RSV, coronaviruses, influenza, adenoviruses). In infants <2 weeks, may also be caused by group B Streptococcus, enteric gram-negative bacilli, or Staphylococcus aureus.' },
      ],
    },
    {
      heading: 'AOM — Clinical Presentation and Diagnosis',
      blocks: [
        { type: 'text', content: 'History: Otalgia (most common complaint; may manifest as ear rubbing/tugging in non-verbal child), decreased hearing, ear drainage (if TM ruptured — sudden relief of pain with purulent otorrhoea), fever (in 1/3 to 2/3 of children), symptoms of preceding URTI, nonspecific symptoms in young children (fussiness, poor sleep, poor feeding, vomiting).' },
        { type: 'text', content: 'Physical Examination: Key features — bulging tympanic membrane; decreased/absent mobility of TM (pneumatic otoscope). Other features — partial/complete opacification of TM; erythema of TM; acute TM perforation with purulent otorrhoea; bullae in TM.' },
        { type: 'text', content: 'Diagnosis (AAP guidelines): AOM should be diagnosed when there is moderate to severe TM bulging or new-onset otorrhoea not caused by otitis externa. AOM may be diagnosed with mild TM bulging and recent onset ear pain (<48 hours) or intense TM erythema. AOM should NOT be diagnosed when middle ear effusion is absent.' },
      ],
    },
    {
      heading: 'AOM — Management',
      blocks: [
        { type: 'text', content: 'Most children get better within 3 days without antibiotics. Antibiotics are the mainstay of treatment in adults.' },
        { type: 'table', headers: ['Age / Clinical Status', 'Treatment'], rows: [
          { cells: ['Children ≥6 months: Severe AOM (bilateral or unilateral)', 'Treat with antibiotics'] },
          { cells: ['Children 6–23 months: Non-severe bilateral AOM', 'Treat with antibiotics'] },
          { cells: ['Children 6–23 months: Non-severe unilateral AOM', 'Treat with antibiotics OR watchful waiting (initiate antibiotics if worsens or fails to improve within 48–72 hours) — based on joint decision making with caregiver'] },
          { cells: ['Children ≥24 months: Non-severe AOM (bilateral or unilateral)', 'Treat with antibiotics OR watchful waiting'] },
          { cells: ['Adults: Any severity of AOM', 'Treat with antibiotics'] },
        ]},
        { type: 'table', headers: ['Patient', 'Choice', 'Antibiotic / Dose'], rows: [
          { cells: ['Children — First-line (no amoxicillin in last 30 days; no concurrent purulent conjunctivitis; not allergic to penicillin)', '', 'Amoxicillin 40–50 mg/kg/day in 2–3 doses; max 1.5 g/day'] },
          { cells: ['Children — First-line for penicillin allergy', '', 'Clarithromycin 15 mg/kg/day in 2 doses; max 1 g/day'] },
          { cells: ['Children — Second-choice (amoxicillin in last 30 days; concurrent purulent conjunctivitis; recurrent AOM unresponsive to amoxicillin)', '', 'Amoxicillin/clavulanic acid 40–50 mg/kg/day (amoxicillin component) in 2 doses; max 3 g/day'] },
          { cells: ['Adults — First-line', '', 'Amoxicillin/clavulanic acid 625 mg TDS'] },
          { cells: ['Adults — First-line if allergic to penicillin', '', 'Doxycycline 100 mg BD'] },
          { cells: ['Adults — Allergic to penicillin + contraindications to doxycycline', '', 'Clarithromycin 500 mg BD'] },
        ]},
        { type: 'text', content: 'Duration: Children — 10 days if age <2 or with TM perforation; 5–7 days if ≥2 years with intact TM and no history of recurrent AOM. Adults — 5–7 days mild to moderate; 10 days severe.' },
        { type: 'text', content: 'Preventive Care: Pneumococcal conjugate vaccine and annual influenza vaccine per immunization schedule. Avoid tobacco smoke exposure. Prophylactic antibiotics NOT indicated to reduce frequency of AOM in children with recurrent AOM.' },
        { type: 'text', content: 'When to Refer: AOM associated with severe systemic infection or acute complications (mastoiditis, meningitis, intracranial abscess, sinus thrombosis, facial nerve paralysis) → refer to ED. Recurrent AOM (3 episodes in 6 months, or 4 episodes in 12 months with 1 in preceding 6 months) → refer to ENT. Hearing loss persisting >2 weeks after resolution → audiogram and ENT. TM perforations persisting ≥12 weeks → refer to ENT.' },
      ],
    },
    {
      heading: 'External Ear Infections (Otitis Externa) — Introduction',
      blocks: [
        { type: 'text', content: 'Otitis externa (OE) refers to inflammation of the external auditory canal, which may also involve the pinna or tympanic membrane. OE can be acute (<6 weeks) or chronic (>3 months). Acute otitis externa (AOE) is most commonly bacterial and presents with rapid onset of ear pain, tenderness, itching, aural fullness and hearing loss. Necrotising/malignant otitis externa involves skin and soft tissue of the external auditory canal and bone tissue of the temporal bone.' },
        { type: 'text', content: 'Epidemiology: ~10% of people develop OE during their lifetime; 95% are acute. Peak incidence at age 7–14 years. Most common pathogens: Pseudomonas aeruginosa and Staphylococcus aureus. Fungal OE is rare (~9%).' },
      ],
    },
    {
      heading: 'AOE — Clinical Presentation and Diagnosis',
      blocks: [
        { type: 'text', content: 'History/Symptoms: Ear pain, pruritus, otorrhoea, hearing loss, aural fullness. Risk factors: Water exposure/swimming, trauma or use of devices in ear canal, skin conditions (atopic dermatitis, psoriasis, allergic contact dermatitis), narrow ear canals, ear canal obstruction, prior ear surgery or radiation, stress, immunocompromised.' },
        { type: 'text', content: 'Physical Examination: Tenderness of tragus and/or pinna; ear canal oedema and erythema; associated debris (spores or curdy debris suggestive of fungal OE); tympanic membrane may be erythematous.' },
        { type: 'text', content: 'Diagnosis (AAP-HNS criteria): Rapid onset (generally within 48 hours) in the past 3 weeks AND symptoms of ear canal inflammation (otalgia, itching, or fullness, with or without hearing loss or jaw pain) AND signs of ear canal inflammation (tenderness of tragus and/or pinna, or diffuse ear canal oedema/erythema, with or without otorrhoea).' },
        { type: 'text', content: 'Complications: (1) Periauricular cellulitis — erythema, oedema, warmth of skin around pinna, generally mild pain without systemic manifestations. (2) Malignant external otitis — potentially fatal; most common in older adult diabetic or immunocompromised patients; spreads to bone/marrow spaces of skull base; severe otalgia out of proportion to examination; granulation tissue at bony cartilaginous junction; cranial nerve palsies indicate poor prognosis.' },
        { type: 'text', content: 'Differential Diagnosis: Contact dermatitis (pruritus dominant; consider if no response to OE treatment over 1 week); CSOM (symptoms mild, TM perforation and purulent middle ear drainage on otoscopy, minimal external canal oedema); Carcinoma of ear canal (consider if abnormal tissue growth or no response to prolonged OE treatment; friable lesion with surrounding purulence).' },
      ],
    },
    {
      heading: 'AOE — Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Prescribe analgesia according to severity of pain.' },
          { text: 'Topical antibiotics for initial treatment of diffuse, uncomplicated AOE. Use topical antibiotic providing coverage against Pseudomonas aeruginosa and Staphylococcus aureus (ciprofloxacin ear drops or neomycin-polymyxin B-dexamethasone ear drops). Treat for 1 week; continue additional week if not resolved; return for review if symptoms persist beyond 2 weeks.' },
          { text: 'If known or suspected TM perforation: use non-ototoxic preparation (topical fluoroquinolone for 7 days is preferred).' },
          { text: 'Oral antibiotics in addition to topical antibiotics: severe OE with cellulitis and/or fever; immunocompromised patients regardless of severity.' },
          { text: 'Oral fluoroquinolone is the antibiotic of choice when oral antibiotics are indicated. If not a candidate for systemic fluoroquinolones, amoxicillin/clavulanate is acceptable.' },
          { text: 'If no response within 48–72 hours, reassess for other causes of illness.' },
        ]},
        { type: 'text', content: 'Preventive Care: No devices in ear canal until symptoms resolved; disinfect prior to reuse. Prevention strategies: remove obstructing cerumen, use acidifying ear drops before/after swimming, use ear plugs while swimming, dry ear canal with hair dryer, avoid trauma to external auditory canal.' },
        { type: 'text', content: 'Instructions for Patients: Lie down with affected ear up; fill ear canal with drops entirely; stay in position for 3–5 minutes; gentle to-and-fro movement of ear may help; keep ear dry while using drops; try not to clean the ear yourself.' },
        { type: 'text', content: 'When to Refer: Refractory symptoms — start oral antibiotic for 1 week and refer to ENT. Patients with possible malignant OE, CSOM or carcinoma of the ear canal → promptly refer to ENT.' },
      ],
    },
  ],
};
