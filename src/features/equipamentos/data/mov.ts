import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const movSchema = z.object({
    id: z.number(),
    item_id: z.number(),
    destino_id: z.number(),
    responsavel: z.number(),
    data: z.date(),
})

export type Mov = z.infer<typeof movSchema>
