import moment from 'moment';

export default {
  labOrderReducer: {
    orders: [],
    labTests: [],
    isLoading: false,
    error: {
      status: false,
      message: null,
    },
  },
  labTestResultsReducer: {
    results: [],
    isLoading: false,
    error: {
      status: false,
      message: null,
    },
  },
  selectedPatient: {},
  selectedLabConcept: {},
  conceptMembers: {},
  patients: {},
  fetchStatus: {
    isLoading: false,
  },
  patientReducer: {
    patient: {
      person: {
        personName: {
          givenName: '',
          familyName: '',
        },
        preferredAddress: {},
      },
      patientIdentifier: {
        identifier: '',
      },
    },
    isLoading: false,
    error: {
      status: false,
      message: null,
    },
  },
  filtersReducer: {
    labResultListFilters: {
      dateToField: moment(),
      dateFromField: moment().subtract(8, 'days'),
      dateField: 'encounter.encounterDatetime' || '',
    },
  },
};
