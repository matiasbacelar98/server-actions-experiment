import { Flex } from '@radix-ui/themes';
import Form from './Form';

export default function Home() {
  return (
    <main>
      <Flex align='center' justify='center' minHeight='100vh'>
        <Form />
      </Flex>
    </main>
  );
}
