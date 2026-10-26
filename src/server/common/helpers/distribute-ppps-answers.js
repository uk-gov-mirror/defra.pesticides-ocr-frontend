import { getSectionAnswers, setSectionAnswer } from './section-answers.js'

// The answers to the distribute pages (routes/distribute).
export const DISTRIBUTE_PPPS_KEY = 'distributePPPs'

export const getDistributePPPsAnswers = (formSession) =>
  getSectionAnswers(formSession, DISTRIBUTE_PPPS_KEY)

export const setDistributePPPsAnswer = (formSession, key, value) =>
  setSectionAnswer(formSession, DISTRIBUTE_PPPS_KEY, key, value)
