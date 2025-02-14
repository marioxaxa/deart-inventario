import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const itemSchema = z.object({
    id: z.number(),
    tombo: z.string(),
    grupo_material: z.string(),
    localizacao: z.number()
})

export type Item = z.infer<typeof itemSchema>
