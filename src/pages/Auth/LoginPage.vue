<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center min-vh-100">
          <div class="w-100 d-block my-5">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-5">
                <div class="card">
                  <div class="card-body">
                    <div class="text-center mb-4 mt-3">
                      <a href="index.html">
                        <span><img src="../../assets/AdminLayout/images/logo-dark.png" alt="" height="26"></span>
                      </a>
                    </div>
                    <div class="p-2">
                      <div class="form-group">
                        <label for="emailaddress">Адрес электронной почты {{form.email}}</label>
                        <input v-model="form.email" class="form-control" type="email" id="emailaddress" required="" placeholder="john@deo.com">
                      </div>
                      <div class="form-group">
                        <a href="pages-recoverpw.html" class="text-muted float-right">Забыли ваш пароль?</a>
                        <label for="password">Пароль {{form.password}}</label>
                        <input v-model="form.password" class="form-control" type="password" required="" id="password" placeholder="Enter your password">
                      </div>

                      <div class="form-group mb-4 pb-3">
                        <div class="custom-control custom-checkbox checkbox-primary">
                          <input type="checkbox" class="custom-control-input" id="checkbox-signin">
                          <label class="custom-control-label" for="checkbox-signin">Запомнить меня</label>
                        </div>
                      </div>
                      <div class="mb-3 text-center">
                        <button class="btn btn-primary btn-block" @click="onSubmit"> Войти </button>
                        <button class="btn btn-primary btn-block" @click="logOut"> Exit </button>
                      </div>
                    </div>
                  </div>
                  <!-- end card-body -->
                </div>
                <!-- end card -->

                <div class="row mt-4">
                  <div class="col-sm-12 text-center">
                    <p class="text-white-50 mb-0">У вас еще нет аккаунта? <a href="/register" class="text-white-50 ml-1"><b>Создать</b></a></p>
                  </div>
                </div>

              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div> <!-- end .w-100 -->
        </div> <!-- end .d-flex -->
      </div> <!-- end col-->
    </div> <!-- end row -->
  </div>

</template>

<script>
import { authApi } from '/src/api/auth';

export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        email: 'yurecblinovgelarm@gmail.com',
        password: 'Rootgel2000'
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        await authApi.doLogin(this.form).then(resp => {
          // window.location.href = '/admin'
        })
      } catch (err) {
        console.log(err)
      }
    },
    logOut(){
      authApi.doLogout()
    }
  }
}
</script>

<style scoped>

</style>