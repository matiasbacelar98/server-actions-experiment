'use server';

import { randomUUID } from 'crypto';

/*
  - Server Actions must be "async"
  - We can use this actions in server an client components
  - If we a are using server actions with a form, we can get the data in the action
*/
export async function createComment(formData: FormData) {
  const formComment = formData.get('comment');

  if (!formComment) return;

  const comment = {
    comment: formComment,
    id: randomUUID(),
  };

  // Send to a DB or API
  console.log(comment);
}
