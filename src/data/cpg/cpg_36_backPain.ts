import { CpgDocument } from '../types';

export const backPain: CpgDocument = {
  id: 'cpg-back-pain',
  condition: 'Acute and Recurrent Back Pain',
  source: '36 NUP CPG - Management of Acute and Recurrent Back Pain in Primary Care.pdf',
  reviewDate: 'Reviewed March 2025 by Dr Teo Hon Wei / Dr Ma Yueyun / Dr Zhang Zhi Peng. Next review: March 2028.',
  advisors: 'Key FPs: Dr Teo Hon Wei, Dr Ma Yueyun. Specialist: Dr Muhammad Nazrul (Consultant, Orthopaedic Surgery, NUH). Input: Dr Tan Jun Hao (Assoc Consultant, Orthopaedic Surgery, NUH).',
  sections: [
    {
      heading: 'Background and Key Messages',
      blocks: [
        { type: 'list', items: [
          { text: 'Acute back pain is common and lasts less than 3 months.' },
          { text: 'Pain is generally non-specific; precise and exact diagnosis is often not possible or necessary.' },
          { text: 'After acute episodes, there may be persistent or fluctuating pain for a few weeks to months.' },
          { text: 'Even in the presence of severe pain that limits activities initially, this tends to improve, with possible recurring episodes.' },
          { text: 'Acute back pain does not cause prolonged loss of function unlike chronic back pain.' },
          { text: 'Chronic back pain = persistent pain >3 months (different from recurrent: episodic acute <3 months with symptom-free periods in between).' },
          { text: 'Patients with chronic back pain are more likely to report loss of function or activity restrictions.' },
          { text: 'Consider specialist review for chronic back pain despite adequate education, reassurance, analgesia and trial of physiotherapy.' },
        ]},
        { type: 'text', content: 'Key Messages: (1) Episodes mostly short-lived (improve within 4 weeks) — reassurance is very helpful. (2) In the absence of red flags, investigations in the first 4–6 weeks do not provide clinical benefit. (3) Encourage patients to remain active: resume usual activities including work as soon as possible. (4) Analgesia and physiotherapy may provide short-term symptom control. (5) Some interventions may be harmful: extended bed rest, extended use of opiates, NSAIDs or benzodiazepines.' },
      ],
    },
    {
      heading: 'Clinical Assessment',
      blocks: [
        { type: 'text', content: 'Rule out red flags first. If present, early investigations, urgent referrals to A&E or spine specialist need to be considered.' },
        { type: 'list', items: [
          { text: 'RED FLAGS: Features of cauda equina syndrome (new-onset incontinence, saddle anaesthesia, lax anal tone, progressively worsening lower limb neurological symptoms)' },
          { text: 'RED FLAGS: Weight loss, current or history of cancers' },
          { text: 'RED FLAGS: Significant trauma or history of osteoporosis' },
          { text: 'RED FLAGS: Fever, long-term steroids use, or other forms of immunosuppressant' },
          { text: 'RED FLAGS: Severe, unremitting night pain' },
        ]},
        { type: 'text', content: 'History: Duration, pain score, trigger, relieving factors, response to previous therapy; previous similar symptoms; activities associated with pain; presence of radiculopathy or claudication; early morning stiffness ≥1 hour; impairment on occupation and ADL; mood disorder (depression/anxiety) especially in chronic LBP.' },
        { type: 'text', content: 'Physical Examination: Focused and targeted. Always consider: (1) Inspection of back and posture (scoliosis, hyperkyphosis, loss of lumbar lordosis); (2) Palpation of spine for localised vertebral tenderness; (3) Lower limb neurological exam (strength, reflexes, sensation and gait).' },
        {
          type: 'table',
          headers: ['Nerve Root', 'Action'],
          rows: [
            { cells: ['L2', 'Hip Flexion'] },
            { cells: ['L3', 'Knee Extension'] },
            { cells: ['L4', 'Ankle Dorsiflexion'] },
            { cells: ['L5', 'Big toe Extension'] },
            { cells: ['S1', 'Ankle Plantarflexion'] },
          ],
        },
        { type: 'text', content: 'Special manoeuvres (if relevant): (1) Straight Leg Raise (SLR / Lasègue\'s sign) — positive when radicular pain (beyond ipsilateral knee, not just back or hamstring) occurs between 30–70° hip flexion. (2) Patrick\'s (FABER) test — positive when hip or buttock pain is elicited with ipsilateral leg flexed at knee, hip abducted and externally rotated; raises suspicion of hip or sacroiliac joint pathology. (3) Schober\'s test (when indicated) — mark 10cm above and 5cm below L5. On forward flexion, distance should increase ≥5cm (to total ≥20cm); if not, restriction in lumbar flexion suspected.' },
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        { type: 'text', content: 'Laboratory: Most patients with acute LBP do not require investigations. Consider etiologies outside the spine (pancreatitis, pyelonephritis, nephrolithiasis, aortic aneurysm, herpes zoster). If suspicion of systemic illness (connective tissue disorder, inflammatory spondyloarthropathy, infection), consider ESR — a normal ESR can help exclude suspected inflammatory arthritis/infection but is non-specific if elevated.' },
        { type: 'text', content: 'Radiological: Earlier use (within first 4–6 weeks without red flags) is not associated with improved outcomes. Radiological findings are often abnormal in asymptomatic patients. Inappropriate imaging can trigger additional costly studies, unneeded treatments, and unwarranted surgery. Only plain X-rays available in NUP (AP and Lateral views; X-ray of SI joint if sacroiliitis suspected).' },
        { type: 'text', content: 'Indications for early radiological investigations: (1) Significant trauma (high energy injury) or low energy trauma in elderly. (2) Current/previous history of cancers. (3) Risk factors for spinal infections (fever, IV drug use, immunosuppression, recent sepsis, recent spine procedure). (4) High risk for vertebral compression fractures (advanced age, prolonged steroids, known osteoporosis).' },
        { type: 'text', content: 'Limitations of plain X-rays: May not be sensitive enough in certain scenarios. Some patients require urgent advanced imaging (MRI): cauda equina syndrome or significant progressive neurological deficits; very high suspicion of spinal infection or malignancy. These patients should be referred to A&E if clinically indicated or given urgent specialist appointments.' },
      ],
    },
    {
      heading: 'Treatment — Non-Specific Low Back Pain',
      blocks: [
        { type: 'list', items: [
          { text: 'Non-pharmacological: Patient education and reassurance (prognosis often good, most cases resolve with little intervention; use NUP MSK brochure). Encourage staying active and returning to usual activities as soon as possible. Avoid bed rest. Lifestyle modification (avoid twisting and bending, avoid heavy contact sports and strenuous activities). Physiotherapy — consider if symptoms last >2 weeks despite adequate analgesia trial.' },
          { text: 'NSAIDs: Strongest evidence for symptom relief in acute back pain. Use with caution/avoid in CKD 3 or worse, patients on antiplatelet/anticoagulant, elderly (use extreme caution even if Cr normal). No clear evidence any NSAID is superior; consider switching if first is ineffective. Prescribe at lowest dose, shortest duration possible (avoid >2 weeks continuous use).' },
          { text: 'Paracetamol ± Orphenadrine: Safer first line for patients with NSAID contraindications (asthmatics, CKD). Beware of sedation risks with Orphenadrine and adverse effects in elderly. Evidence weaker than NSAIDs.' },
          { text: 'Opioids/Tramadol: Only as alternative when other medications are contraindicated. Limit to a few days (not more than 2 weeks). Be aware of potential for abuse.' },
          { text: 'Antiepileptics: Usually for radicular pain. Gabapentin/Pregabalin have very low-level evidence for chronic radicular pain.' },
          { text: 'Topical analgesia: Low-level evidence for topical capsaicin; very little evidence for other topical analgesics.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Management Algorithm for Acute Back Pain',
      blocks: [
        { type: 'text', content: 'Initial presentation: Check for red flags. If red flags present → investigate and consider referral to A&E or Orthopaedics. If no red flags → give patient the "green light": advise to stay active and continue to work; explain and reassure (use MSK brochures); agree on a management plan; control symptoms; arrange review if needed; consider physio if appropriate (recurrent back pain without prior trial of physio; acute back pain with pain score ≥7 with functional impairment).' },
        { type: 'text', content: 'Initial 1–4 weeks: Expect improvements. Review if necessary. Consider physiotherapy (Physiofirst clinic if appropriate; back care education and advice; up to 3 sessions).' },
        { type: 'text', content: '4–6 weeks follow-up (if necessary): Recheck for red flags. If symptoms improving → reinforce green light advice. If not improving → consider investigations (X-rays); consider specialist referral if no improvement after >6–8 weeks.' },
      ],
    },
    {
      heading: 'Recurrent and Chronic Back Pain',
      blocks: [
        { type: 'list', items: [
          { text: 'For recurrent back pain, revisit history and physical examination to ensure no new symptoms or findings suggesting more serious aetiology (including red flags).' },
          { text: 'Management of a recurring episode (<3 months, no worsening/new worrying symptoms) is similar to acute back pain with conservative management.' },
          { text: 'Consider offering physiotherapy if not already done.' },
          { text: 'Consider referring to spine specialist if: chronic back pain >3 months despite appropriate conservative management; worsening symptoms or red flags; significant functional impairment (frequent work absence, ADL affected); recurrent back pain not well controlled with conservative management.' },
          { text: 'Patients with chronic pain are more likely to have underlying mood disorders (anxiety, depression) — consider screening.' },
        ]},
      ],
    },
    {
      heading: 'Referral to Spine Specialist',
      blocks: [
        { type: 'list', items: [
          { text: 'Refer immediately to A&E: New-onset cauda equina syndrome symptoms; high suspicion of spinal infection (febrile, septic, significant rest pain, spinal tenderness, risk factors); high energy injury with spinal fractures (RTA, fall from height).' },
          { text: 'Refer urgently to spine specialist: High suspicion of primary spinal malignancy or metastatic disease (including pathological fractures); compression fractures with persistent significant pain; severe unremitting or worsening radicular symptoms with PID features especially with neurological deficit. (Milder, stable symptoms may have a trial of conservative management first.)' },
          { text: 'Recurrent or chronic back pain not responding to adequate conservative management (should have trial of physiotherapy first after excluding red flags).' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 37 NUP CPG — Acute Coronary Syndrome (Jul 2025)
// ---------------------------------------------------------------------------
const acuteCoronarySyndrome: CpgDocument = {
};
