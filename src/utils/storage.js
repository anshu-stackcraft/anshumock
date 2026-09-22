const PREFIX = 'anshumock:';

export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(PREFIX + key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch (e) {
      console.error('Error removing from localStorage', e);
    }
  },
};

export const getSelectedExam = () => storage.get('selectedExam') || 'UPSSSC_PET';
export const setSelectedExam = (examId) => storage.set('selectedExam', examId);

export const getAttempts = () => storage.get('attempts') || [];
export const saveAttempt = (attempt) => {
  const attempts = getAttempts();
  storage.set('attempts', [attempt, ...attempts].slice(0, 50));
};

export const getLanguage = () => storage.get('language') || 'en';
export const setLanguage = (lang) => storage.set('language', lang);
