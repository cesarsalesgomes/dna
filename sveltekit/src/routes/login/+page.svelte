<script lang="ts">

  import type { SubmitFunction } from '@sveltejs/kit';

  import { SubmitButtonWithLoadingWhenFetching } from '$components/buttons';
  import { GoogleSvg } from '$components/svgs';
  import { DNA_BACKEND_URL, DNA_FRONT_URL } from '$constants/system.constants';
  import { authLoginHandler } from '$features/auth/utils';
  import { DirectusClientSdk } from '$lib/directus';

  import { enhance } from '$app/forms';

  let email: string;
  let password: string;

  const submitFunction: SubmitFunction = ({ cancel }) => {
    cancel();

    DirectusClientSdk.login(email, password, authLoginHandler);
  };
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="prose sm:mx-auto sm:w-full sm:max-w-md dark:prose-invert">
    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight">Sign in to your account</h2>
    <p class="mt-2 text-center text-sm">
      Or
      <a href="/" class="font-medium text-primary-600 hover:text-primary-500">start your 14-day free trial</a>
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" method="POST" use:enhance={submitFunction}>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="mt-1">
            <input id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              bind:value={email}
              class="
                block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm
              ">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              bind:value={password}
              class="
                block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm
              ">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="/" class="font-medium text-primary-600 hover:text-primary-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <SubmitButtonWithLoadingWhenFetching label="Sign in" />
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-3 gap-3">
          <div>
            <a
              rel="external"
              href={`${DNA_BACKEND_URL}/auth/login/google?redirect=${DNA_FRONT_URL}/login/google`}
              class="
                inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500
                shadow-sm hover:bg-gray-50
              ">
              <span class="sr-only">Sign in with Google</span>
              <GoogleSvg className="h-5 w-5"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
