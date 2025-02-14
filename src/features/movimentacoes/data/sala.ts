import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const salaSchema = z.object({
    id: z.number(),
    nome: z.string(),
})

export type Sala = z.infer<typeof salaSchema>
