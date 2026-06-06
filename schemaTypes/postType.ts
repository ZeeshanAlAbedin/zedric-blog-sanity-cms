import {defineField, defineType} from 'sanity'
import {category} from './category'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'notes',
      type: 'text',
    }),
    defineField({
      name: 'quip',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: '',
              options: {
                isHighlighted: true // Shows the field prominently
              }
            }
          ]
        }
      ],
    }),
    defineField({
      name: 'ref_category',
      title: 'Category',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [{type: 'category'}]
        }
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sub_category',
      title: 'Sub Category',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [{type: 'subcategory'}]
        }
      ],
    }),
    defineField({
      name: 'dateWritten',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [
        {
            type: "reference",
            to: [{ type: 'post' }],
        }
      ],
    }),
    defineField({
        name: 'gallery',
        title: 'Image Gallery',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
            hotspot: true
          },
          fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          }
        ]
      }]
    }),
  ],
})



