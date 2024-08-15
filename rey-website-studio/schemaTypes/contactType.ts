import { defineField, defineType } from "sanity";

export const contactType = defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
    ],
})