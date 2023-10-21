<script>
  import { Notification } from '$features/notification/components';

  import './styles.css';
</script>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <Notification/>
  <slot/>
</main>
