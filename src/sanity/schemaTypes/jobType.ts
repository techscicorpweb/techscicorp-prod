import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
	  title: 'Job Title',
      type: 'string',
	}),
	defineField({
      name: 'description',
	  title: 'Job Description',
      type: 'text',
	}),
	defineField({
      name: 'location',
	  title: 'Location',
      type: 'string',
	}),
	defineField({
      name: 'clearance',
	  title: 'Clearance',
      type: 'string',
    }),
  ],
})