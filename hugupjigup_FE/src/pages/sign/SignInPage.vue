<template>
    <v-sheet class="mx-auto" elevation="4" width="300">
      <div class="divider-text">Sign in with</div>

      <div class="oauth-section">
        <button class="oauth-button">
          <v-icon>mdi-github</v-icon>
          GITHUB
        </button>
        <button class="oauth-button">
          <v-icon>mdi-google</v-icon>
          GOOGLE
        </button>
      </div>

      <div class="divider-text">Or sign in with credentials</div>

      <v-form ref="form">
        <!-- 이메일 입력 필드 -->
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          :error="emailError"
          :error-messages="emailErrorMsg"
        ></v-text-field>

        <!-- 비밀번호 입력 필드 -->
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          :type="hidePassword ? 'password' : 'text'"
          append-icon="mdi-eye"
          @click:append="togglePassword"
          required
          :error="passwordError"
          :error-messages="passwordErrorMsg"
        ></v-text-field>

        <v-checkbox v-model="checkbox" label="Remember me"></v-checkbox>

        <v-btn class="mt-4" color="primary" block @click="login">
          SIGN IN
        </v-btn>

        <div class="auth-links">
          <a href="#" class="forgot-password">Forgot password?</a>
          <a href="#" class="create-account">Create new account</a>
        </div>
      </v-form>
    </v-sheet>
  </template>

  <script lang="ts" setup>
  import { ref } from "vue";
  import axios from "axios";
  import {signIn} from "@/usecases/user_usecase";
  import router from "@/router"; // 백엔드 API 요청을 위한 axios 추가

  const form = ref();
  const email = ref<string>("");
  const password = ref<string>("");
  const hidePassword = ref<boolean>(true);
  const checkbox = ref<boolean>(false);

  // 이메일 & 비밀번호 오류 상태
  const emailError = ref<boolean>(false);
  const emailErrorMsg = ref<string>("");
  const passwordError = ref<boolean>(false);
  const passwordErrorMsg = ref<string>("");

  // 이메일 검증 규칙
  const emailRules = ref([
    (v: string) => !!v || "이메일을 입력해 주세요.",
    (v: string) => /.+@.+\..+/.test(v) || "유효한 이메일 형식이 아닙니다.",
  ]);

  // 비밀번호 검증 규칙
  const passwordRules = ref([
    (v: string) => !!v || "비밀번호를 입력해 주세요.",
  ]);

  // 비밀번호 표시 토글
  function togglePassword() {
    hidePassword.value = !hidePassword.value;
  }

  // 로그인 요청
  async function login() {
    const isValid = await form.value?.validate();
    if (!isValid.valid) return; // 입력값이 유효하지 않으면 로그인 시도 안 함

    try {
      const response = await signIn({
        email: email.value,
        password: password.value });

      if (response) {
        router.replace('/profile');
      } else {
        throw new Error("로그인 실패");
      }
    } catch (error) {
      console.error(error);
      emailError.value = true;
      passwordError.value = true;
      emailErrorMsg.value = "이메일이나 비밀번호가 일치하지 않습니다.";
      passwordErrorMsg.value = "이메일이나 비밀번호가 일치하지 않습니다.";
    }
  }
  </script>

  <style scoped>
  /* ========= 소셜 로그인 버튼 영역 ========= */
  .oauth-section {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  /* ========= 소셜 로그인 버튼 ========= */
  .oauth-button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.9rem;
  }

  .oauth-button:hover {
    opacity: 0.8;
  }

  /* ========= 구분 텍스트 ========= */
  .divider-text {
    text-align: center;
    color: #555;
    margin-bottom: 16px;
    font-size: 0.9rem;
  }

  /* ========= 하단 링크 영역 ========= */
  .auth-links {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 0.85rem;
  }

  .auth-links a {
    color: blue;
    text-decoration: underline;
  }

  .auth-links a:hover {
    text-decoration: none;
  }
  </style>
