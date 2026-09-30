import { CpgDocument } from '../types';

export const footAnkleFractures: CpgDocument = {
  id: 'cpg-foot-ankle-fractures',
  condition: 'Minor Fractures, Sprains and Strains — Foot and Ankle',
  source: '41 NUP CPG - Management of Minor fractures, Sprains and Strains of the Foot and Ankle.pdf',
  reviewDate: 'Reviewed December 2023 by Dr Zhang Zhi Peng, Dr Ma Yueyun, Dr Tan Juanmin, Dr Amaris Lim.',
  advisors: 'Key FPs: Dr Ma Yueyun, Dr Tan Juanmin, Dr Amaris Lim. Key Contributors: Dr Valerie Tan Huali, Dr Zhang Zhi Peng, Dr Sky Koh Wei Chee. Specialist: Dr Hong Choon Chiet (Consultant, Orthopaedic Surgery, NUHS).',
  sections: [
    {
      heading: 'Introduction and Principles',
      blocks: [
        { type: 'list', items: [
          { text: 'Strain: Tearing injury to muscle fibres from excessive tension or overuse.' },
          { text: 'Sprain: Tearing injury to one or more ligaments of a joint when forced beyond normal motion.' },
          { text: 'Fracture: Disruption in bone tissue from force, repetitive stress, or invasive process.' },
        ]},
        { type: 'text', content: 'Acute management principles (PRICE): P — Protect (support/splint). R — Rest, avoid weight bearing on injured side. I — Ice 15 min every 2–3 hours (not directly on skin). C — Compress with elastic bandage (not when sleeping). E — Elevate to reduce swelling/bruising. Always evaluate joint above and below site of injury.' },
        { type: 'text', content: 'RED FLAGS (refer ALL to ED): Unstable fractures requiring backslab/cast or involving joint lines; fractures involving weight-bearing/long bones (exception: small avulsion/chip fractures without significant pain not involving a joint); open fractures or significant soft tissue injuries; acute dislocations; any injury with neurovascular compromise. If high clinical suspicion but negative X-ray, manage as possible fracture; otherwise review and repeat radiographs in 1–2 weeks.' },
      ],
    },
    {
      heading: 'Toe Fractures',
      blocks: [
        { type: 'text', content: 'Anatomy: Great toe has 2 phalanges (crucial for balance and locomotion). Lesser toes (2nd–5th) have 3 phalanges each (occasionally 2). Each toe has plantar and dorsal arteries and nerves — unusual to injure except in open or severe crush injuries. Most closed toe fractures can be treated conservatively with excellent outcomes.' },
        { type: 'text', content: 'Clinical Evaluation: Exclude open fractures. Assess severity of subungual haematoma (hallmark of distal phalangeal fracture). Clinical toe alignment and rotational deformity. Neurovascular status. Suggested investigation: XR Toe AP and Oblique views.' },
        { type: 'text', content: 'Management of toe fractures:' },
        { type: 'list', items: [
          { text: 'Subungual haematoma: Displaced/fractured nail → treat as open fracture. Intact nail <48h → consider referral to ED for trephination vs. nailbed laceration repair. If decline referral, counsel on possible nail loss and deformity.' },
          { text: 'Open fracture, distal neurovascular compromise, significant displacement/fracture dislocation → Refer to ED immediately.' },
          { text: '<18 years old → TCU Paediatric Orthopaedic Surgery 1–2 weeks.' },
          { text: 'Multiple toe fractures → TCU Orthopaedic Surgery 1–2 weeks.' },
          { text: 'Manage in polyclinic (closed, minimally displaced, single fracture in adult ≥18 years): Analgesia; buddy splint fractured toe to adjacent toe × 1–2 weeks; daily elevation and minimise walking on injured foot in first 2 weeks; avoid sports/jumping/running × 6–8 weeks. Most toe fractures heal within 6–8 weeks. Residual stiffness, pain, swelling may last 3–6 months. Scheduled follow-up not routinely required; arrange 6–8 week review at clinician\'s discretion. Offer up to 10–14 days MC, 14 days light duty (excuse boots).' },
        ]},
      ],
    },
    {
      heading: 'Metatarsal Fractures',
      blocks: [
        { type: 'text', content: 'Suggested investigation: XR foot AP and Oblique views.' },
        { type: 'list', items: [
          { text: 'Acute fractures: Most treated conservatively (elevation, ice, analgesia, immobilisation). Non-displaced or minimally displaced can be splinted conservatively. Significant displacement/angulation requires reduction before immobilisation. Refer acute metatarsal fractures to ED for immobilisation (backslab + non-weight bearing). Small avulsion/chip fractures not involving joint and without significant pain → early Orthopaedic Surgery review in 1–2 weeks.' },
          { text: 'CAUTION: Small avulsions/chip fractures involving the joint could represent Lisfranc injury or MTPJ collateral ligament avulsion → refer to ED. Lisfranc injury can present with seemingly minor X-ray findings (e.g. misalignment of 2nd MTPJ) — high index of suspicion required.' },
          { text: 'Stress fractures: Most commonly 2nd and 3rd metatarsals. Conservative management: 6–8 weeks rest and orthotics to offload metatarsals. Calcium and Vitamin D supplementation at clinician\'s discretion. Refer to Orthopaedic Surgery outpatient clinic in 2–4 weeks.' },
        ]},
      ],
    },
    {
      heading: 'Tarsal Bone Fractures',
      blocks: [
        { type: 'list', items: [
          { text: 'Talus, Navicular, Calcaneal fractures: Mostly from high-velocity trauma (fall from height, RTA). May be associated with ligamentous injuries or joint dislocations. Talus and navicular have increased risk of avascular necrosis. Investigations: XR foot AP and Oblique + XR ankle AP and Lateral (talus/navicular); XR calcaneum Axial and Lateral (calcaneal). Refer to ED in acute setting.' },
          { text: 'Calcaneal stress fractures: From repetitive stress on heel. Mild symptoms — activity restriction and heel inserts. Significant symptoms (pain/swelling with walking) — non-weight bearing with crutches until symptoms subside. XR calcaneum Axial and Lateral. Calcium and Vitamin D at clinician\'s discretion. Refer to Orthopaedic Surgery outpatient clinic in 2–4 weeks.' },
        ]},
      ],
    },
    {
      heading: 'Ankle Sprain',
      blocks: [
        { type: 'text', content: 'Ankle sprains are among the commonest sports injuries. Exclude ankle fracture with targeted physical exam and appropriate imaging. Initial management: PRICE. Nursing team can bandage sprained ankle. Refer to physiotherapy for rehabilitation (proprioceptive training, peroneal tendon strengthening and stretching ± ankle bracing). If swelling and bruising out of proportion to trauma → suspect occult fracture; consider temporary immobilisation + non-weight bearing 1–2 weeks; refer to ED if needed. Refer to Orthopaedic Surgery in 4–6 weeks for residual ankle instability, recurrent sprains, pain and swelling on re-attendance.' },
      ],
    },
    {
      heading: 'Ankle Fractures and Ottawa Ankle/Foot Rule',
      blocks: [
        { type: 'text', content: 'Ankle fractures are among the commonest orthopaedic injuries. Suggested investigation: XR ankle AP and Lateral views.' },
        { type: 'text', content: 'Ottawa Ankle/Foot Rule:' },
        { type: 'list', items: [
          { text: 'Radiographs of ANKLE only required if: Pain in malleolar region PLUS one of — bony tenderness at distal posterior edge of fibula (6cm) or tip of lateral malleolus; OR bony tenderness at distal posterior edge of tibia (6cm) or tip of medial malleolus; OR inability to bear weight (limping = bearing weight) both immediately and in consult room for 4 steps.' },
          { text: 'Radiographs of FOOT only required if: Pain in midfoot region PLUS one of — bony tenderness at base of 5th metatarsal; OR bony tenderness at navicular; OR inability to bear weight both immediately and in consult room for 4 steps.' },
          { text: 'Acute ankle fractures: Refer to ED for immobilisation (backslab + non-weight bearing). Small avulsion/chip fractures without significant pain may not require ED — early Orthopaedic Surgery review in 1–2 weeks; consider ankle brace.' },
        ]},
      ],
    },
    {
      heading: 'Follow-Ups',
      blocks: [
        { type: 'list', items: [
          { text: 'Scheduled follow-up for closed, minimally displaced toe fractures not routinely required.' },
          { text: 'Non-toe fractures: referred to ED for backslab or early orthopaedics review after stabilisation.' },
          { text: 'Bony and ligamentous injuries can take up to 6–9 months to heal. Symptoms usually improve progressively after initial 6–8 weeks.' },
          { text: 'Patients with initially negative radiographs but persistent symptoms: repeat assessment and radiographs; ensure adequate pain control and compliance to rest, elevation and weight-bearing restrictions.' },
          { text: 'Consider specialist referral for: worsening/persistent pain, swelling, or loss of function; malunion, nonunion, or delayed union; injuries requiring claim/compensation or legal input; any outstanding physician or patient concern.' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 42 NUP CPG — Other Common Skin Conditions (Jan 2026)
// ---------------------------------------------------------------------------
const otherSkinConditions: CpgDocument = {
};
