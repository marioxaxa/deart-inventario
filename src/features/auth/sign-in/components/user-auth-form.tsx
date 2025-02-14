import { HTMLAttributes, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
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
import { PasswordInput } from '@/components/password-input'
import { API } from '@/service/@index'
import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/authStore'
import { useNavigate } from '@tanstack/react-router'
import { toast } from '@/hooks/use-toast'

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Adicione seu usuario' }),
  password: z
    .string()
    .min(1, {
      message: 'Adicione a sua senha',
    })
    .min(6, {
      message: 'Senhas devem ter no minimo 6 caracteres',
    }),
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })


  const navigate = useNavigate()
  
  const login = async (data : TasksForm) => {

    return API.Login(
      data.email,
      data.password
    )
  }
  const { auth } = useAuthStore()

  const mutation = useMutation({
    mutationFn: (data : TasksForm) => login(data) ,
    onSuccess: (data) => {
      const user = data.user
      auth.setUser({
        id: user.id,
        username: user.username,
        role: user.role
      })
      toast({
        title: 'Logado com sucesso',
      })
      navigate({ to: '/equipamentos' })
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // eslint-disable-next-line no-console
    console.log(data)

    mutation.mutate(data)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Usuario</FormLabel>
                  <FormControl>
                    <Input placeholder='josedearte' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <FormLabel>Senha</FormLabel>
                  </div>
                  <FormControl>
                    <PasswordInput placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='mt-2' disabled={isLoading}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
