export const mockConfigs = {
  UPSSSC_PET: {
    tests: [
      { id: 'pet_full_01', name: 'PET Full Mock Test #01', questions: 100, duration: 120 * 60, negativeMarking: true, marksPerQuestion: 1, negativeMarks: 0.25 },
      { id: 'pet_prev_01', name: 'PET Previous Pattern 2023', questions: 100, duration: 120 * 60, negativeMarking: true, marksPerQuestion: 1, negativeMarks: 0.25 },
      { id: 'pet_adv_01', name: 'PET Advanced Mock #01', questions: 100, duration: 120 * 60, negativeMarking: true, marksPerQuestion: 1, negativeMarks: 0.25 },
    ]
  },
  SSC_GD: {
    tests: [
      { id: 'ssc_gd_01', name: 'SSC GD Full Mock #01', questions: 80, duration: 60 * 60, negativeMarking: true, marksPerQuestion: 2, negativeMarks: 0.5 },
      { id: 'ssc_gd_02', name: 'SSC GD Previous Year', questions: 80, duration: 60 * 60, negativeMarking: true, marksPerQuestion: 2, negativeMarks: 0.5 },
    ]
  },
  SSC_MTS: {
    tests: [
      { id: 'ssc_mts_01', name: 'SSC MTS Full Mock #01', questions: 90, duration: 90 * 60, negativeMarking: true, marksPerQuestion: 1, negativeMarks: 0.25 },
    ]
  },
  ARMY_GD: {
    tests: [
      { id: 'army_gd_01', name: 'Army GD Full Mock #01', questions: 50, duration: 60 * 60, negativeMarking: false, marksPerQuestion: 2, negativeMarks: 0 },
    ]
  },
  ARMY_AGNIVEER: {
    tests: [
      { id: 'army_agni_01', name: 'Army Agniveer Mock #01', questions: 50, duration: 60 * 60, negativeMarking: true, marksPerQuestion: 2, negativeMarks: 0.5 },
    ]
  },
  BSF_TRADESMAN: {
    tests: [
      { id: 'bsf_01', name: 'BSF Tradesman Mock #01', questions: 100, duration: 120 * 60, negativeMarking: false, marksPerQuestion: 1, negativeMarks: 0 },
    ]
  },
  UP_POLICE: {
    tests: [
      { id: 'up_police_01', name: 'UP Police Constable Mock #01', questions: 150, duration: 120 * 60, negativeMarking: true, marksPerQuestion: 2, negativeMarks: 0.5 },
    ]
  },
  MP_POLICE: {
    tests: [
      { id: 'mp_police_01', name: 'MP Police Mock #01', questions: 100, duration: 120 * 60, negativeMarking: false, marksPerQuestion: 1, negativeMarks: 0 },
    ]
  },
  STATE_POLICE: {
    tests: [
      { id: 'state_police_01', name: 'State Police Gen Mock #01', questions: 100, duration: 120 * 60, negativeMarking: false, marksPerQuestion: 1, negativeMarks: 0 },
    ]
  },
};
