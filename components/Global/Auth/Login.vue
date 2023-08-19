<template>
    <div>
        <form class="space-y-6" @submit.prevent="submit">

            <div class="relative -space-y-px rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300"></div>
                <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input 
                        id="email-address" 
                        name="email" 
                        type="email" 
                        autocomplete="email" 
                        required 
                        class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        placeholder="Email address"
                        v-model="form.email"
                    >
                </div>
                <div>
                    <label for="password" class="sr-only">Password</label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        autocomplete="current-password" 
                        required 
                        class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        placeholder="Password"
                        v-model="form.password"
                    >
                </div>
            </div>

            <div>
                <button 
                    type="submit" 
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Sign in
                </button>
            </div>

        </form>
    </div>
</template>

<script setup>
    const form = reactive({
        email: '',
        password: ''
    });

    const validations = reactive({
        email: {
            valid: true,
            message: ''
        },
        password: {
            valid: true,
            message: ''
        }
    });

    const { login } = useAuth();
    const router = useRouter();
    
    const { submit } = useSubmit(
    () => {
        return login(form);
    }, {
        onSuccess: () => router.push("/"),
    }
    );
    // async function submitLogin() {
    //     submitRequest(
    //         login(form), () => {
    //             // Handle successful login here
    //          },
    //         (validationErrors) => {
    //             setServerErrors( validationErrors );
    //         }       
    //     )
    // };

    const setServerErrors = ( errors ) => {
        if( errors.email ){
            validations.email.valid = false;
            validations.email.message = errors.email[0];
        }else{
            validations.email.valid = true;
            validations.email.message = '';
        }

        if( errors.password ){
            validations.password.valid = false;
            validations.password.message = errors.password[0];
        }else{
            validations.password.valid = true;
            validations.password.message = '';
        }
    }
</script>