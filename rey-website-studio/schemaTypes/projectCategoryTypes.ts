import { defineField, defineType } from "sanity";

export const projectCategoryType = defineType({
    name: 'projectCategory',
    title: 'Project Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        defineField({
            name: 'hexCode',
            type: 'string',
        }),
    ],
})