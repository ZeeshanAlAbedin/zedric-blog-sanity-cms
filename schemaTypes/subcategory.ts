import {defineField, defineType} from 'sanity'

export const subcategory = defineType({
  name: 'subcategory',
  title: 'Sub Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
  ],
})



