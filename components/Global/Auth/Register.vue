<template>
    <div>
        <form class="space-y-6">

            <div class="relative -space-y-px rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300"></div>
            
                <div>
                    <label for="name" class="sr-only">Full name</label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        autocomplete="name" 
                        required 
                        class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        placeholder="Full name"
                        v-model="form.name"
                    >
                    <div class="w-full text-xs text-red-500 mt-1"
                        v-show="!validations.name.valid"
                        v-text="validations.name.message">
                    </div>
                </div>
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
                    <div class="w-full text-xs text-red-500 mt-1"
                        v-show="!validations.email.valid"
                        v-text="validations.email.message">
                    </div>
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
                    <div class="w-full text-xs text-red-500 mt-1"
                        v-show="!validations.password.valid"
                        v-text="validations.password.message">
                    </div>
                </div>
                <div>
                    <label for="confirm-password" class="sr-only">Confirm Password</label>
                    <input 
                        id="confirm-password" 
                        name="password_confirmation" 
                        type="password" 
                        autocomplete="current-password" 
                        required 
                        class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        placeholder="Confirm Password"
                        v-model="form.password_confirmation"
                    >
                    <div class="w-full text-xs text-red-500 mt-1"
                        v-show="!validations.password_confirmation.valid"
                        v-text="validations.password_confirmation.message">
                    </div>
                </div>
            </div>

            <div>
                <button 
                    type="button" 
                    @click="submitRegistration()" 
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Create account
                </button>
            </div>

        </form>
    </div>
</template>

<script setup>

    const processing = ref(false);

    const form = reactive({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const validations = reactive({
        name: {
            valid: true,
            message: ''
        },
        email: {
            valid: true,
            message: ''
        },
        password: {
            valid: true,
            message: ''
        },
        password_confirmation: {
            valid: true,
            message: ''
        }
    });

    const { register } = useAuth();

    const router = useRouter();

    async function submitRegistration() {
        if( validRegistrationForm() ){
            processing.value = true;

            // if( PLATFORM == 'mobile' ){
            //     submitRequest( 
            //         registerMobile( form ),
            //         () => {
            //             processing.value = false;
            //         },
            //         (validationErrors) => {
            //             processing.value = false;
            //             setServerErrors( validationErrors );
            //         }
            //     )
            // }else{
                submitRequest(
                    register( form ),
                    () => {
                        processing.value = false;
                        navigateTo("/");
                        // bus.emit({
                        //     method: 'show-verify'
                        // })

                    },
                    (validationErrors) => {
                        processing.value = false;
                        setServerErrors( validationErrors );
                    }
                );
            //}        
        }
    }

    const validRegistrationForm = () => {
        let validForm = true;

        if( form.name == '' ){
            validations.name.valid = false;
            validations.name.message = 'A name is required to register';
            validForm = false;
        }else{
            validations.name.valid = true;
            validations.name.message = '';
        }

        if( form.email == ''
            || !form.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
                validations.email.valid = false;
                validations.email.message = 'A valid email address is required to register';
                validForm = false;
        }else{
            validations.email.valid = true;
            validations.email.message = '';
        }

        if( form.password.length < 4 ){
                validations.password.valid = false;
                validations.password.message = 'A secure password must be entered.';
                validForm = false;
        }else{
            validations.password.valid = true;
            validations.password.message = '';
        }

        if( form.password != form.password_confirmation ){
            validations.password_confirmation.valid = false;
            validations.password_confirmation.message = 'The password must be confirmed.';
            validForm = false;
        }else{
            validations.password_confirmation.valid = true;
            validations.password_confirmation.message = '';
        }

        return validForm;
    }

    const setServerErrors = ( errors ) => {
        if( errors.email ){
            validations.email.valid = false;
            validations.email.message = errors.email[0];
        }if(errors.password){
            validations.password.valid = false;
            validations.password.message = errors.password[0];
        }else{
            validations.email.valid = true;
            validations.email.message = '';
        }
    }
</script>