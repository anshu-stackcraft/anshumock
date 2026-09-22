export const exams = [
  { id: 'UPSSSC_PET', name: 'UPSSSC PET', shortName: 'PET', color: '#ff6a00', questions: 500, progress: 64, subjects: ['History', 'Geography', 'Polity', 'Science', 'Economy', 'Hindi', 'Maths', 'Reasoning', 'UP GK'] },
  { id: 'SSC_GD', name: 'SSC GD', shortName: 'SSC GD', color: '#38bdf8', questions: 500, progress: 42, subjects: ['General Intelligence', 'General Knowledge', 'Elementary Maths', 'English/Hindi'] },
  { id: 'SSC_MTS', name: 'SSC MTS', shortName: 'MTS', color: '#a78bfa', questions: 500, progress: 31, subjects: ['Numerical Ability', 'Reasoning', 'General Awareness', 'English'] },
  { id: 'ARMY_GD', name: 'Army GD', shortName: 'Army GD', color: '#22c55e', questions: 250, progress: 25, subjects: ['General Knowledge', 'General Science', 'Maths'] },
  { id: 'ARMY_AGNIVEER', name: 'Army Agniveer', shortName: 'Agniveer', color: '#facc15', questions: 250, progress: 18, subjects: ['General Knowledge', 'Science', 'Maths', 'Reasoning'] },
  { id: 'BSF_TRADESMAN', name: 'BSF Tradesman', shortName: 'BSF', color: '#fb7185', questions: 250, progress: 15, subjects: ['General Awareness', 'Numerical Ability', 'Reasoning'] },
  { id: 'UP_POLICE', name: 'UP Police', shortName: 'UP Police', color: '#f97316', questions: 500, progress: 22, subjects: ['General Hindi', 'Law & Constitution', 'Numerical Ability', 'General Knowledge'] },
  { id: 'MP_POLICE', name: 'MP Police', shortName: 'MP Police', color: '#60a5fa', questions: 500, progress: 12, subjects: ['General Knowledge', 'Reasoning', 'Science', 'Hindi'] },
  { id: 'STATE_POLICE', name: 'State Police', shortName: 'State Police', color: '#c084fc', questions: 500, progress: 8, subjects: ['General Awareness', 'Reasoning', 'Law', 'Language'] },
]

export const getExam = (id) => exams.find((exam) => exam.id === id) || exams[0]
