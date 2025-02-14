import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SelectDropdown } from '@/components/select-dropdown'
import { useEquipamento } from '@/context/equipamento-context'
import { useTasks } from '../context/tasks-context'
import { API } from '@/service/@index'
import { useQueryClient, useMutation } from '@tanstack/react-query'

const formSchema = z.object({
  localizacao: z.string().min(1, 'Destino é obrigatório.'),
})
type TasksForm = z.infer<typeof formSchema>

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TasksImportDialog({ open, onOpenChange }: Props) {

  const { salasList } = useEquipamento()
  const { selectedRows } = useTasks()
  
    const salas_options = salasList.map((sala) => ({
      label: sala.nome,
      value: String(sala.nome),
      icon: undefined,
    }))

  const form = useForm<TasksForm>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        localizacao: '',
      },
    })

    const moveItem = async (data : TasksForm) => {
      const sala_id = salasList.find((sala) => sala.nome === data.localizacao)?.id

      if (!sala_id) {
        throw new Error('Destino inválido.')
      }

      const item_id_list = selectedRows.map((item) => item.id)
  
      API.CreateMovimentacaoMultipla( item_id_list, sala_id, 1)
    }
  
  
    const queryClient = useQueryClient()
  
    const mutation = useMutation({
      mutationFn: (data : TasksForm) => moveItem(data) ,
      onSuccess: () => {
        toast({
          title: 'Item movimentado com sucesso:',
        })
        queryClient.invalidateQueries({ queryKey: ['itemsListContext'] })
      },
      onError: () => {
        toast({
          title: 'Erro ao criar item:',
        })
      },
    })

  const onSubmit = () => {
    mutation.mutate(form.getValues())
    
    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        onOpenChange(val)
        form.reset()
      }}
    >
      <DialogContent className='gap-2 sm:max-w-sm'>
        <DialogHeader className='text-left'>
          <DialogTitle>Movimentar item</DialogTitle>
          <DialogDescription>
            Marque aqui a movimentação de um item entre salas.
          </DialogDescription>
        </DialogHeader>
        {selectedRows.length > 0 ? (
          <Form {...form}>
          <form id='task-import-form' onSubmit={form.handleSubmit(onSubmit)}>
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
        ) :
        <h2 className='py-8 text-center'>
          Selecione um item para movimentar
        </h2>
        }
        
        <DialogFooter className='gap-2 sm:gap-0'>
          <DialogClose asChild>
            <Button variant='outline'>Fechar</Button>
          </DialogClose>
          <Button type='submit' form='task-import-form'>
            Movimentar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
