import { CpgDocument } from '../types';

export const upperLimbFractures: CpgDocument = {
  id: 'cpg-upper-limb-fractures',
  condition: 'Minor Fractures, Sprain and Strain — Upper Limbs',
  source: '40 NUP CPG - Management of Minor Fractures Sprain and Strain in Upper Limbs.pdf',
  reviewDate: 'Updated November 2025. Next review: March 2027.',
  advisors: 'Key FPs: Dr Teo Hon Wei, Dr Tan Juanmin, Dr Zhang Zhi Peng. Specialists: Dr Renita Sirisena (Consultant, Hand & Reconstructive Microsurgery, NUHS) and Dr Wang Mingchang (Visiting Consultant, Orthopaedic Surgery, NUHS).',
  sections: [
    {
      heading: 'Introduction and Principles',
      blocks: [
        { type: 'list', items: [
          { text: 'Strain: Tearing injury to muscle fibres from excessive tension or overuse.' },
          { text: 'Sprain: Tearing injury to one or more ligaments of a joint when joint is forced beyond limits of normal motion.' },
          { text: 'Fracture: Disruption in bone tissue from force exceeding bone strength, repetitive stress, or an invasive process.' },
        ]},
        { type: 'text', content: 'Acute management principles (PRICE): P — Protect from further damage (support/splint). R — Rest, avoid excessive weight bearing on injured side. I — Ice for 15 min every 2–3 hours (do not apply ice directly to skin). C — Compress with elastic bandage (not when sleeping). E — Elevate and support to reduce swelling/bruising. Avoid ice beyond first 24 hours (may impair healing by inhibiting inflammation). For strains/sprains, avoid prolonged rest. When pain improves, encourage gentle range-of-movement exercises. Always evaluate the joint above and below the site of injury.' },
        { type: 'text', content: 'RED FLAGS (refer ALL to ED): Unstable fractures requiring backslab/cast immobilisation or intra-articular fractures; fractures involving weight-bearing or long bones (exception: small avulsion/chip fractures without significant pain not involving a joint); open fractures or significant soft tissue injuries; acute dislocations; any injury with neurovascular compromise. Fracture lines may not be visible in acute fractures — if high clinical suspicion (severe pain, significant swelling, immobility, functional impairment), manage as possible fracture or review in 1–2 weeks.' },
      ],
    },
    {
      heading: 'Finger Sprains',
      blocks: [
        { type: 'text', content: 'Suggested investigation: XR Fingers AP and Lateral views.' },
        { type: 'list', items: [
          { text: 'Volar (Palmar) plate sprain (hyperextension injury, PIPJ or DIPJ pain): Treat with buddy splint to adjacent finger × 1–2 weeks. If avulsion fractures: splint and refer to hand surgery direct access.' },
          { text: 'Collateral ligament injury: Most managed conservatively with buddy splint and early mobilisation (within 2 weeks). EXCEPT: Ulnar collateral ligament injury of 1st MCP joint (hyperextension/hyperabduction; pain, swelling, ecchymosis over thenar eminence + instability) — refer to hand surgery direct access.' },
          { text: 'Traumatic flexor tendon avulsion (Jersey finger — FDP from distal phalanx): Inability to actively flex DIPJ. XR finger AP and Lateral. Splint PIPJ and DIPJ in slight flexion. ALL jersey finger injuries: refer hand surgeon urgently (within 1 week preferably).' },
        ]},
      ],
    },
    {
      heading: 'Fractures',
      blocks: [
        { type: 'list', items: [
          { text: 'Distal phalanx fractures: Tuft fractures and mallet finger (extensor terminal tendon ± avulsion) can be managed conservatively. Mallet finger requires extension splint. Refer mallet finger to hand surgery direct access. Refer acutely displaced, shortened, or angulated fractures to A&E.' },
          { text: 'Middle phalanx fractures: Assess for rotation, shortening, or angulation. Immobilise in gutter splint. Refer to hand surgery direct access. Displaced/shortened/angulated → A&E.' },
          { text: 'Proximal phalanx fractures: Often unstable → refer to A&E for immobilisation.' },
          { text: 'Metacarpal fractures (XR Hand PA and Oblique): 1st metacarpal — intra-articular (Bennett\'s & Rolando\'s) often require surgery; extra-articular can be managed conservatively with long thumb spica splint. 2nd–5th metacarpal — assess for angulation and scissoring; non-displaced require splint. Refer acute metacarpal fractures to ED. Small avulsion/chip fractures without significant pain may not need ED but need early hand surgery review (direct access).' },
          { text: 'Carpal bone fractures (XR Wrist AP and Lateral): All require immobilisation with backslab before HRM review for surgery. Refer acute carpal bone fractures to ED. Special attention to scaphoid fracture (XR Scaphoid view): Plain radiograph may miss early fractures; always request scaphoid view. Prevalence of occult fracture with negative plain radiograph ~25%. If high clinical suspicion (snuffbox tenderness), assume fracture until proven otherwise. Requires thumb spica slab.' },
          { text: 'Distal radius fractures (XR Wrist AP and Lateral): Colles\' fracture (dorsal angulation); Smith\'s fracture (volar angulation). Require splint/arm cast and early HRM review. Refer to ED for immobilisation (reduction if required). Small avulsion/chip fractures may not need ED — suggest firm wrist guard, HRM review.' },
        ]},
        { type: 'text', content: 'Follow-ups for fractures: Follow up with acute fractures within 1–2 weeks (repeat X-ray to ensure no significant displacement; ensure adequate pain control). Typical healing: 8–12 weeks. Consider specialist referral for: worsening/persistent pain, swelling, or loss of function; malunion, nonunion, or delayed union; injuries requiring claim/compensation or legal input.' },
      ],
    },
    {
      heading: 'Adhesive Capsulitis (Frozen Shoulder)',
      blocks: [
        { type: 'text', content: 'Common shoulder condition with pain, stiffness, and loss of function. Idiopathic; increased prevalence in hypothyroidism, diabetes, and women aged 40–60. Commonly resolves within 1–2 years but some patients may never fully regain function.' },
        { type: 'text', content: 'Clinical pearls: Dull, poorly localised pain, may radiate to biceps. Elevated arm or reaching behind back elicits pain and stiffness. Red flags: fever, malaise, weight loss, night sweats. Cardinal findings: reduced active and passive motion in all planes (primarily external rotation); in advanced stages, loss of natural arm swing with muscular atrophy. Diagnosed clinically; radiography to exclude other shoulder pathologies. Consider DM and hypothyroidism screening for at-risk patients.' },
        { type: 'text', content: 'Management: Analgesia; Physiotherapy (manual mobilisation); Intra-articular corticosteroid injection; Hydrodilatation (arthroscopic distension — high-volume local anaesthetic + corticosteroids + normal saline); Surgery (manipulation under anaesthesia and arthroscopic capsule release). Consider referral to orthopaedic surgeon if minimal improvement after 6–12 weeks of conservative management.' },
      ],
    },
    {
      heading: 'Common Upper Limb Tendinopathy',
      blocks: [
        { type: 'text', content: 'Terminology: Tendinopathy = continuum of tendon injuries. Tendinitis = acute inflammatory response. Tendinosis = non-healing, degenerative; largely devoid of inflammatory cells. Acute tendinitis can occur on a background of chronic tendinosis. Tendon pathology typically develops in hypovascular/watershed areas.' },
        { type: 'text', content: 'Management mainstays: Activity modification with relative rest (pain score ≤3 on VAS); Analgesia; Physiotherapy with rehabilitative exercises to gradually increase load-bearing capacity (for both acute and chronic).' },
        { type: 'text', content: 'Analgesia options: Short-term oral or topical NSAIDs/COX-2 inhibitors in acute tendinopathy; peritendinous corticosteroid injection ± fenestration (repeated injections may exacerbate chronic pain, lead to tendon rupture — NEVER inject into/around weight-bearing tendons e.g. Achilles); dry needling; extracorporeal shock wave therapy for treatment-refractory tendinopathy. Early isometric, concentric, and eccentric exercises are advantageous. Specialist referral if conservative therapy proves ineffective after 3–6 months.' },
        { type: 'list', items: [
          { text: 'Rotator Cuff Tendinopathy: Most common cause of shoulder pain. Rotator cuff = subscapularis, supraspinatus, infraspinatus, teres minor. Common presentations: pain/weakness with overhead movement, reaching behind back, lying on affected side. Treatment: Analgesia; rehabilitative exercise (rotator cuff + scapular stabiliser strengthening); subacromial corticosteroid injections for short-term pain relief when initiating physio. Specialist referral if symptomatic after 6 months of physiotherapy.' },
          { text: 'Epicondylitis: Lateral (tennis elbow) — overuse → tendinosis of extensor carpi radialis brevis; lateral elbow pain with gripping, reduced grip strength; tenderness ~1cm distal to lateral epicondyle with resisted wrist extension. Medial (golfer\'s elbow) — less common; flexor-pronator tendon origin at medial epicondyle; medial epicondyle tenderness with resisted forearm pronation/wrist flexion. Management: Analgesia; eccentric strengthening exercises; cock-up wrist braces (lateral) or counterforce straps; corticosteroid injection or shockwave therapy if conservative measures ineffective.' },
          { text: 'De Quervain\'s Tenosynovitis: Tendons of extensor pollicis brevis and abductor pollicis longus in 1st extensor compartment. Gradual onset radial-sided wrist pain worsened by gripping/lifting. Tenderness and swelling over first dorsal wrist extensor compartment at radial styloid. Provocative tests: Finkelstein manoeuvre (pain over first extensor compartment when passively adducting the hand ulnarward while maintaining thumb traction); Eichhoff manoeuvre (pain with ulnar deviation while clenching thumb in fist). Negative grind test (positive in 1st CMC osteoarthritis). Management pathway: Most — Analgesia (NSAIDs) + orthoses (long thumb spica); Some — OT/corticosteroid injections; Selected — Surgery if conservative fails. Review escalation if pain and function persistently affected after 4–6 weeks.' },
        ]},
      ],
    },
    {
      heading: 'Carpal Tunnel Syndrome',
      blocks: [
        { type: 'text', content: 'Common entrapment neuropathy — compression of median nerve under transverse carpal ligament. Characteristic: night awakening with symptoms, relieved by shaking hands (flick sign). Paraesthesia and pain in median nerve distribution. Late-stage: weakness in thumb abduction and opposition.' },
        { type: 'text', content: 'Causes: Mostly idiopathic. Predisposing conditions: rheumatoid arthritis, DM, pregnancy, hypothyroidism, obesity, acromegaly, previous wrist fractures. Occupational: repetitive forceful activities, vibratory tools.' },
        { type: 'text', content: 'Examination: Paraesthesia in palmar aspect of thumb, index, middle, and radial half of ring finger. Thenar eminence wasting (severe). Weakness of thumb abduction/opposition (severe). Provocative tests: Tinel\'s, Phalen\'s, Duran\'s. Complete upper extremity exam (neck, shoulder, elbow, wrist) to exclude other causes.' },
        { type: 'text', content: 'Management: Conservative — splinting to keep wrist in neutral position (usually nocturnal but can be continuous); corticosteroid injection; oral prednisolone 20mg daily × 10–14 days (less effective than injection). OT, nerve gliding exercises, activity modification. Referral to Hand Surgery: electrodiagnostic tests for atypical cases; surgical decompression for persistent/severe cases.' },
        { type: 'text', content: 'Wrist Splint (available in NUP treatment rooms for BBK and PIO): Maintains neutral wrist positioning; alleviates numbness and pain. Worn daily (even at night). Remove for hand washing, showering, home exercises. Recommended wearing time ≥3 weeks; overall treatment duration 6–8 weeks. Management pathway: Most — NSAIDs + wrist splint (refer to Nur for splint, BBK/PIO only; also available OTC); Some — OT (direct OT referral workflow, BBK/PIO only); Selected — Surgery if conservative fails.' },
      ],
    },
    {
      heading: 'Trigger Finger',
      blocks: [
        { type: 'text', content: 'Stenosing tenosynovitis preventing smooth motion of the gliding tendon, usually at the level of A1 pulley. Common in >50 years, especially females and diabetics. Commonly affects thumb, middle and ring fingers.' },
        { type: 'text', content: 'Symptoms: Pain and stiffness at volar aspect of MCPJ; snapping or popping sensation with digital flexion/extension; locking of finger in flexed position at PIPJ. Risk factors: repetitive forceful gripping.' },
        { type: 'text', content: 'Examination: Tenderness at volar MCPJ over A1 pulley; palpable nodule at flexor tendon. Green\'s Classification: Grade I — pain/history of catching, not demonstrable; Grade II — demonstrable catching with intact active extension; Grade IIIA — demonstrable catching requiring passive extension; Grade IIIB — catching with loss of active flexion; Grade IV — fixed flexion contracture of PIPJ.' },
        { type: 'text', content: 'Management: Conservative — Oval 8 splint; Corticosteroid injection; NSAIDs; OT and activity modification. Referral to Hand Surgery for persistent cases. Oval 8 Splint (available in NUP treatment rooms for BBK and PIO): Limits full finger flexion at PIP joint; reduces stress on inflamed tendons and pulleys. Available in 14 sizes (sizes 2–15). Recommended wearing time ≥3 weeks; overall treatment duration 6–8 weeks. Management pathway: Most — NSAIDs + Oval 8 splint; Some — OT; Selected — Surgery if conservative fails.' },
      ],
    },
  ],
};
