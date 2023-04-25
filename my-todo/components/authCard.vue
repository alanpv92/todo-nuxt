<template>
  <div class="flex flex-col justify-center align-middle">
    <div class="flex flex-col justify-between py-5 px-5 gap-3 shadow-2xl">
      <div class="flex flex-col gap-4">
        <input
          v-model="userName"
          class="p-2 w-96 bg-gray-200 rounded shadow"
          placeholder="user name"
        />
        <input
          v-model="password"
          type="password"
          class="p-2 w-96 bg-gray-200 rounded shadow"
          placeholder="password"
        />
        <input
          v-model="confirmPassword"
          type="password"
          v-if="authMode"
          class="p-2 w-96 bg-gray-200 rounded shadow"
          placeholder="confirm password"
        />
      </div>
      <div class="flex flex-col align-middle justify-center">
        <button
          v-if="!isLoading"
          @click="submitData"
          class="bg-blue-500 w-24 py-2 rounded-full text-white self-end mt-3 shadow-xl"
        >
          {{ getAuthButtonText }}
        </button>
        <LoadingIndicator class="self-end mt-1" v-if="isLoading" />
        <button @click="toggleAuthMode" class="text-center text-blue-600 mt-5">
          {{ getAuthText }}
        </button>
      </div>
    </div>
    <div
      v-if="errorText.length != 0"
      class="bg-red-400 w-full text-white rounded-b py-2 px-2"
    >
      {{ errorText }}
    </div>
  </div>
</template>

<script>
export default {
    
  data() {
    return {
      isReg: false,
      userName: "",
      password: "",
      confirmPassword: "",
      errorText: "",
      isLoading: false,
    };
  },
  computed: {
    authMode() {
      return this.isReg;
    },
    getAuthText() {
      if (this.isReg) {
        return "Already have an account";
      } else {
        return "Dont have an account?";
      }
    },
    getAuthButtonText() {
      if (this.isReg) {
        return "Sign Up";
      } else {
        return "Sign In";
      }
    },
  },
  methods: {
    submitData() {
      if (this.validateUserImport()) {
        this.isLoading=true;

      } else {
      }
    },
    toggleAuthMode() {
      this.userName = "";
      this.password = "";
      this.confirmPassword = "";
      if (this.isReg) {
        this.isReg = false;
      } else {
        this.isReg = true;
      }
    },
    validateUserImport() {
      if (this.userName.length == 0 || this.password.length == 0) {
        this.errorText = "all fields are required";
        this.clearErrorText();
        return false;
      }
      if (this.isReg && this.password != this.confirmPassword) {
        this.errorText = "password does not match";
        this.clearErrorText();
        return false;
      }
      return true;
    },
    clearErrorText() {
      setTimeout(() => {
        this.errorText = "";
      }, 2000);
    },
  },
};
</script>
