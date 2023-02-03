<script lang="ts">
  import './app.css';
  import { QueryClientProvider } from '@tanstack/svelte-query';

  import { Notification } from '@features/notification/components';
  import QueryClientSingleton from '@providers/svelte-query-client.provider';

  import AppRoutes from './routes/AppRoutes.svelte';
</script>

<QueryClientProvider client={QueryClientSingleton.getInstance()}>
  <AppRoutes/>
  <Notification/>
</QueryClientProvider>
