import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { authorizationToLoginPayload } from 'src/utils/base-64-converter';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;
  console.log('authorization', authorization);
  const loginPayload = authorizationToLoginPayload(authorization);
  return loginPayload?.id;
});
