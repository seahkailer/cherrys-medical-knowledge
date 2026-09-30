import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// Individual CPG document imports — one file per document
// ---------------------------------------------------------------------------
import { allergicConjunctivitis } from './cpg/cpg_02_allergicConjunctivitis';
import { allergicRhinitis } from './cpg/cpg_03_allergicRhinitis';
import { anaemia } from './cpg/cpg_04_anaemia';
import { anxietyDisorder } from './cpg/cpg_05_anxietyDisorder';
import { jointPain } from './cpg/cpg_06_jointPain';
import { acuteRedEye } from './cpg/cpg_07_acuteRedEye';
import { gastroenteritis } from './cpg/cpg_08_gastroenteritis';
import { atrialFibrillation } from './cpg/cpg_09_atrialFibrillation';
import { bph } from './cpg/cpg_10_bph';
import { bronchialAsthmaAdults } from './cpg/cpg_11_bronchialAsthmaAdults';
import { bronchialAsthmaChildren } from './cpg/cpg_12_bronchialAsthmaChildren';
import { cancerScreening } from './cpg/cpg_13_cancerScreening';
import { cancerSurvivorship } from './cpg/cpg_14_cancerSurvivorship';
import { chalazion } from './cpg/cpg_15_chalazion';
import { chronicHepatitisB } from './cpg/cpg_16_chronicHepatitisB';
import { chronicHepatitisC } from './cpg/cpg_17_chronicHepatitisC';
import { chronicKidneyDisease } from './cpg/cpg_18_chronicKidneyDisease';
import { copd } from './cpg/cpg_19_copd';
import { dementia } from './cpg/cpg_20_dementia';
import { depression } from './cpg/cpg_21_depression';
import { diabetesMellitus } from './cpg/cpg_22_diabetesMellitus';
import { dyspepsia } from './cpg/cpg_23_dyspepsia';
import { earInfections } from './cpg/cpg_24_earInfections';
import { eczema } from './cpg/cpg_25_eczema';
import { epilepsy } from './cpg/cpg_26_epilepsy';
import { epistaxisInChildren } from './cpg/cpg_27_epistaxisInChildren';
import { erectileDysfunction } from './cpg/cpg_28_erectileDysfunction';
import { heartFailure } from './cpg/cpg_29_heartFailure';
import { hypertension } from './cpg/cpg_30_hypertension';
import { insomnia } from './cpg/cpg_31_insomnia';
import { kidneyCysts } from './cpg/cpg_32_kidneyCysts';
import { lipids } from './cpg/cpg_33_lipids';
import { thrombocytosisErythrocytosis } from './cpg/cpg_34_thrombocytosisErythrocytosis';
import { acneSkinInfections } from './cpg/cpg_35_acneSkinInfections';
import { backPain } from './cpg/cpg_36_backPain';
import { acuteCoronarySyndrome } from './cpg/cpg_37_acuteCoronarySyndrome';
import { gout } from './cpg/cpg_38_gout';
import { chronicCoronarySyndrome } from './cpg/cpg_39_chronicCoronarySyndrome';
import { upperLimbFractures } from './cpg/cpg_40_upperLimbFractures';
import { footAnkleFractures } from './cpg/cpg_41_footAnkleFractures';
import { otherSkinConditions } from './cpg/cpg_42_otherSkinConditions';
import { psoriasis } from './cpg/cpg_43_psoriasis';
import { masld } from './cpg/cpg_45_masld';
import { neonatalJaundice } from './cpg/cpg_46_neonatalJaundice';
import { advanceCarePlanning } from './cpg/cpg_47_advanceCarePlanning';
import { ocd } from './cpg/cpg_48_ocd';
import { osteoporosis } from './cpg/cpg_49_osteoporosis';
import { parkinsonDisease } from './cpg/cpg_50_parkinsonDisease';

export const cpgDocuments: CpgDocument[] = [
  allergicConjunctivitis,
  allergicRhinitis,
  anaemia,
  anxietyDisorder,
  jointPain,
  acuteRedEye,
  gastroenteritis,
  atrialFibrillation,
  bph,
  bronchialAsthmaAdults,
  bronchialAsthmaChildren,
  cancerScreening,
  cancerSurvivorship,
  chalazion,
  chronicHepatitisB,
  chronicHepatitisC,
  chronicKidneyDisease,
  copd,
  dementia,
  depression,
  diabetesMellitus,
  dyspepsia,
  earInfections,
  eczema,
  epilepsy,
  epistaxisInChildren,
  erectileDysfunction,
  heartFailure,
  hypertension,
  insomnia,
  kidneyCysts,
  lipids,
  thrombocytosisErythrocytosis,
  acneSkinInfections,
  backPain,
  acuteCoronarySyndrome,
  gout,
  chronicCoronarySyndrome,
  upperLimbFractures,
  footAnkleFractures,
  otherSkinConditions,
  psoriasis,
  masld,
  neonatalJaundice,
  advanceCarePlanning,
  ocd,
  osteoporosis,
  parkinsonDisease,
];
