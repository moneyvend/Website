import { QueryClient } from 'react-query';

class UseQueryHelper {
  constructor() {
    this.queryClient = new QueryClient();
  }
}
export default new UseQueryHelper();
