import { Button, TextArea, Box, Flex } from '@radix-ui/themes';
import { createComment } from '@/actions';

export default function Form() {
  return (
    <Box width='100%' maxWidth='450px'>
      <form action={createComment}>
        <Flex direction='column' gapY='2'>
          <TextArea placeholder='Comment…' name='comment' />
          <Button type='submit'>Add</Button>
        </Flex>
      </form>
    </Box>
  );
}
