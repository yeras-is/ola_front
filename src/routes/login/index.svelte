<script>


</script>

<style>
    .login-clean {
        background: #f1f7fc;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact-clean form {
        max-width: 480px;
        width: 90%;
        margin: 0 auto;
        background-color: #fff;
        padding: 40px;
        border-radius: 4px;
        color: #505e6c;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1)
    }

    @media (max-width: 767px) {

        .contact-clean form {
            padding: 30px
        }
    }

    .contact-clean h2 {
        margin-top: 5px;
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 36px;
        color: inherit
    }

    .contact-clean form .form-control {
        background: #fff;
        border-radius: 2px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, .05);
        outline: 0;
        color: inherit;
        padding-left: 12px;
        height: 42px
    }

    .contact-clean form .form-control:focus {
        border: 1px solid #b2b2b2
    }

    .contact-clean form textarea.form-control {
        min-height: 100px;
        max-height: 260px;
        padding-top: 10px;
        resize: vertical
    }

    .contact-clean form .btn {
        padding: 16px 32px;
        border: none;
        background: 0 0;
        box-shadow: none;
        text-shadow: none;
        opacity: .9;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 13px;
        letter-spacing: .4px;
        line-height: 1;
        outline: 0 !important
    }

    .contact-clean form .btn:hover {
        opacity: 1
    }

    .contact-clean form .btn:active, .login-clean form .btn-primary:active {
        transform: translateY(1px)
    }

    .contact-clean form .btn-primary {
        background-color: #055ada !important;
        margin-top: 15px;
        color: #fff
    }

    .login-clean form {
        max-width: 320px;
        width: 90%;
        margin: 0 auto;
        background-color: #fff;
        padding: 40px;
        border-radius: 4px;
        color: #505e6c;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1)
    }

    .login-clean .illustration {
        text-align: center;
        padding: 0 0 20px;
        font-size: 36px;
        color: #f4476b
    }

    .login-clean form .form-control {
        background: #f7f9fc;
        border: none;
        border-bottom: 1px solid #dfe7f1;
        border-radius: 0;
        box-shadow: none;
        outline: 0;
        color: inherit;
        text-indent: 8px;
        height: 42px
    }

    .login-clean form .btn-primary {
        background: #f4476b;
        border: none;
        border-radius: 4px;
        padding: 11px;
        box-shadow: none;
        margin-top: 26px;
        text-shadow: none;
        outline: 0 !important
    }

    .login-clean form .btn-primary:active, .login-clean form .btn-primary:hover {
        background: #eb3b60
    }

    .login-clean form .forgot {
        display: block;
        text-align: center;
        font-size: 12px;
        color: #6f7a85;
        opacity: .9;
        text-decoration: none
    }

    .login-clean form .forgot:active, .login-clean form .forgot:hover {
        opacity: 1;
        text-decoration: none
    }
</style>

<section class="login-clean">
    <form method="post">
        <div class="illustration">OLA App</div>
        <h2></h2>
        <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email"></div>
        <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Password"></div>
        <div class="mb-3">
            <button class="btn btn-primary d-block w-100" type="submit">Log In</button>
        </div>
        <a class="forgot" href="#">Forgot your email or password?</a>
    </form>
</section>
