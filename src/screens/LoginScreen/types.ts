import { LoginOktaRequest } from '@src/services/types.ts'

export type LoginForm = Pick<LoginOktaRequest, 'username' | 'password'>
