<script lang="ts">
  import { getFirstLetterUppercase } from '$utils/string.utils';

  export let firstName: string | null = '';

  export let lastName: string | null = '';

</script>

<div class="flex justify-center items-center tracking-widest h-8 w-8 rounded-full bg-gray-900 text-white text-sm font-medium">
  {getFirstLetterUppercase(firstName) + getFirstLetterUppercase(lastName)}
</div>
