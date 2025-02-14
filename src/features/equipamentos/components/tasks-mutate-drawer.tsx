import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { API } from '@/service/@index'
import { useEquipamento } from '@/context/equipamento-context'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { SelectDropdown } from '@/components/select-dropdown'
import { material_codes } from '../data/data'
import { Task } from '../data/schema'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: Task
}

const formSchema = z.object({
  tombo: z.string().min(1, 'Tombo é obrigatório.'),
  grupo_material: z.string().min(1, 'Grupo Material é obrigatório.'),
  localizacao: z.string().min(1, 'Destino é obrigatório.'),
})
type TasksForm = z.infer<typeof formSchema>

export function TasksMutateDrawer({ open, onOpenChange }: Props) {
  const { salasList } = useEquipamento()

  const salas_options = salasList.map((sala) => ({
    label: sala.nome,
    value: String(sala.nome),
    icon: undefined,
  }))

  const form = useForm<TasksForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tombo: '',
      grupo_material: '',
      localizacao: '',
    },
  })

  const createItem = async (data : TasksForm) => {
    const sala_id = salasList.find((sala) => sala.nome === data.localizacao)?.id

    API.CreateItem({
      grupo_material: data.grupo_material,
      tombo: data.tombo,
      localizacao: sala_id,
    })
  }


  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (data : TasksForm) => createItem(data) ,
    onSuccess: () => {
      toast({
        title: 'Item criado com sucesso:',
      })
      queryClient.invalidateQueries({ queryKey: ['itemsListContext'] })
    },
    onError: () => {
      toast({
        title: 'Erro ao criar item:',
      })
    },
  })

  const onSubmit = (data: TasksForm) => {
    mutation.mutate(data)

    onOpenChange(false)
    form.reset()
  }

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v)
        form.reset()
      }}
    >
      <SheetContent className='flex flex-col'>
        <SheetHeader className='text-left'>
          <SheetTitle>Crie um item</SheetTitle>
          <SheetDescription>
            Adicione um novo item fornecendo as informações necessárias.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id='tasks-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-1 space-y-5'
          >
            <FormField
              control={form.control}
              name='tombo'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Tombo</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Adicione o tombo' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='grupo_material'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Grupo Material</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='Selecione um grupo'
                    items={material_codes}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='localizacao'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Destino</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='Selecione um destino'
                    items={salas_options}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter className='gap-2'>
          <SheetClose asChild>
            <Button variant='outline'>Fechar</Button>
          </SheetClose>
          <Button form='tasks-form' type='submit'>
            Adicionar item
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
