// schemas/workExperience.js
export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'object',
    fields: [
      {
        name: 'company',
        title: 'Company',
        type: 'string'
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'date'
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'date'
      }
    ]
  }
  