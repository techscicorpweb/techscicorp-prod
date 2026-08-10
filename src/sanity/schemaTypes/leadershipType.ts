import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'leadership',
  title: 'Leadership',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
	  title: 'Name',
      type: 'string',
	}),
	defineField({
      name: 'title',
	  title: 'Title',
      type: 'string',
	}),
	defineField({
      name: 'bio',
	  title: 'Bio',
      type: 'text',
    }),
	defineField({
	  name: 'photo',
	  title: 'Photo',
	  type: 'image',
	  options: {
		hotspot: true,
	  }
	}),
  ],
})