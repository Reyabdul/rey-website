import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectInfo',
      type: 'object',
      fields: [
        defineField({
          name: 'role',
          type: 'string',
        }),
        defineField({
          name: 'client',
          type: 'string',
        }),
        defineField({
          name: 'technology',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'value',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'github',
      type: 'url',
    }),
    defineField({
      name: 'figma',
      type: 'url',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),

    //Project Categories
    defineField({
      name: 'projectCategory',
      type: 'reference',
      to: {type: 'projectCategory'},
    }),
  ],
})
